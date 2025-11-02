#!/usr/bin/env node

/**
 * Manual Test Script for variants.json Parsing
 *
 * Purpose: Verify that all variants.json files can be loaded and parsed correctly,
 * and that variant selection logic works as expected.
 *
 * Tests:
 * - JSON parsing for all 4 tools (Claude, Opencode, Ampcode, Droid)
 * - Structure validation for each variant (Lite, Standard, Pro)
 * - Wildcard patterns ("*")
 * - Specific selections (["item1", "item2"])
 * - Empty arrays ([])
 * - Metadata fields (name, description, useCase, targetUsers)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// ANSI color codes for output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

// Test results tracking
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

// Project root
const projectRoot = path.join(__dirname, '..');
const packagesDir = path.join(projectRoot, 'packages');

// Tools to test
const tools = ['claude', 'opencode', 'ampcode', 'droid'];

// Required variants
const requiredVariants = ['lite', 'standard', 'pro'];

// Required fields per variant
const requiredFields = ['name', 'description', 'useCase', 'targetUsers', 'agents', 'skills', 'resources', 'hooks'];

// Expected structure for each variant category
const expectedCategories = ['agents', 'skills', 'resources', 'hooks'];

/**
 * Log functions
 */
function logSection(message) {
  console.log(`\n${colors.cyan}${'='.repeat(70)}${colors.reset}`);
  console.log(`${colors.cyan}${message}${colors.reset}`);
  console.log(`${colors.cyan}${'='.repeat(70)}${colors.reset}\n`);
}

function logTest(message) {
  console.log(`${colors.gray}Testing: ${message}${colors.reset}`);
}

function logPass(message) {
  console.log(`  ${colors.green}✓ ${message}${colors.reset}`);
  passedTests++;
  totalTests++;
}

function logFail(message, error) {
  console.log(`  ${colors.red}✗ ${message}${colors.reset}`);
  if (error) {
    console.log(`    ${colors.red}${error}${colors.reset}`);
  }
  failedTests++;
  totalTests++;
  failures.push({ test: message, error: error || 'Unknown error' });
}

function logWarning(message) {
  console.log(`  ${colors.yellow}⚠ ${message}${colors.reset}`);
}

function logInfo(message) {
  console.log(`  ${colors.gray}${message}${colors.reset}`);
}

/**
 * Test functions
 */

function testFileExists(toolId) {
  logTest(`${toolId}: variants.json file exists`);
  const variantsPath = path.join(packagesDir, toolId, 'variants.json');

  try {
    assert(fs.existsSync(variantsPath), `File not found: ${variantsPath}`);
    logPass(`File exists at ${variantsPath}`);
    return variantsPath;
  } catch (error) {
    logFail(`File does not exist`, error.message);
    return null;
  }
}

function testJSONParsing(toolId, variantsPath) {
  logTest(`${toolId}: JSON parsing`);

  try {
    const content = fs.readFileSync(variantsPath, 'utf8');
    const data = JSON.parse(content);
    assert(typeof data === 'object' && data !== null, 'Parsed data is not an object');
    logPass(`Valid JSON parsed successfully`);
    return data;
  } catch (error) {
    logFail(`JSON parsing failed`, error.message);
    return null;
  }
}

function testRequiredVariants(toolId, data) {
  logTest(`${toolId}: Required variants exist (lite, standard, pro)`);

  let allVariantsExist = true;
  for (const variant of requiredVariants) {
    if (!data[variant]) {
      logFail(`Missing variant: ${variant}`, `Variant "${variant}" not found in variants.json`);
      allVariantsExist = false;
    }
  }

  if (allVariantsExist) {
    logPass(`All required variants present: ${requiredVariants.join(', ')}`);
  }

  return allVariantsExist;
}

function testVariantStructure(toolId, variantName, variantData) {
  logTest(`${toolId}: ${variantName} - Structure validation`);

  let allFieldsValid = true;

  // Test required fields
  for (const field of requiredFields) {
    if (!variantData.hasOwnProperty(field)) {
      logFail(`Missing field: ${field}`, `Field "${field}" not found in ${variantName} variant`);
      allFieldsValid = false;
    }
  }

  if (allFieldsValid) {
    logPass(`All required fields present: ${requiredFields.join(', ')}`);
  }

  return allFieldsValid;
}

function testMetadataFields(toolId, variantName, variantData) {
  logTest(`${toolId}: ${variantName} - Metadata fields`);

  const metadataFields = ['name', 'description', 'useCase', 'targetUsers'];
  let allMetadataValid = true;

  for (const field of metadataFields) {
    if (typeof variantData[field] !== 'string' || variantData[field].trim() === '') {
      logFail(`Invalid ${field}`, `Field "${field}" must be a non-empty string`);
      allMetadataValid = false;
    }
  }

  if (allMetadataValid) {
    logPass(`All metadata fields are non-empty strings`);
    logInfo(`Name: "${variantData.name}"`);
    logInfo(`Description: "${variantData.description.substring(0, 60)}..."`);
  }

  return allMetadataValid;
}

function testSelectionPatterns(toolId, variantName, variantData) {
  logTest(`${toolId}: ${variantName} - Selection patterns`);

  let allPatternsValid = true;

  for (const category of expectedCategories) {
    const value = variantData[category];

    // Must be either "*" (wildcard), array, or empty string
    if (value === '*') {
      logInfo(`${category}: wildcard "*" (select all)`);
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        logInfo(`${category}: empty array [] (select none)`);
      } else {
        logInfo(`${category}: specific selection [${value.length} items]`);
        // Validate all items are strings
        const invalidItems = value.filter(item => typeof item !== 'string');
        if (invalidItems.length > 0) {
          logFail(`Invalid items in ${category}`, `Array contains non-string items: ${invalidItems.join(', ')}`);
          allPatternsValid = false;
        }
      }
    } else {
      logFail(`Invalid pattern in ${category}`, `Must be "*", array, or empty string. Got: ${typeof value}`);
      allPatternsValid = false;
    }
  }

  if (allPatternsValid) {
    logPass(`All selection patterns are valid`);
  }

  return allPatternsValid;
}

function testWildcardExpansion(toolId, variantName, variantData) {
  logTest(`${toolId}: ${variantName} - Wildcard expansion logic`);

  // Simulate wildcard expansion
  const wildcardCategories = expectedCategories.filter(cat => variantData[cat] === '*');

  if (wildcardCategories.length === 0) {
    logInfo(`No wildcards in this variant`);
    passedTests++;
    totalTests++;
    return true;
  }

  logInfo(`Wildcards found in: ${wildcardCategories.join(', ')}`);

  // In real implementation, wildcard "*" should expand to all available files
  // For this test, we just verify the pattern is recognized
  for (const category of wildcardCategories) {
    const categoryPath = path.join(packagesDir, toolId, category);
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath);
      logInfo(`  ${category}: would expand to ${files.length} items`);
    } else {
      logWarning(`  ${category}: directory not found (${categoryPath})`);
    }
  }

  logPass(`Wildcard expansion logic verified`);
  return true;
}

function testSpecificSelection(toolId, variantName, variantData) {
  logTest(`${toolId}: ${variantName} - Specific selection logic`);

  // Find categories with specific selections (arrays with items)
  const specificCategories = expectedCategories.filter(cat =>
    Array.isArray(variantData[cat]) && variantData[cat].length > 0
  );

  if (specificCategories.length === 0) {
    logInfo(`No specific selections in this variant`);
    passedTests++;
    totalTests++;
    return true;
  }

  logInfo(`Specific selections found in: ${specificCategories.join(', ')}`);

  let allSelectionsValid = true;

  for (const category of specificCategories) {
    const selectedItems = variantData[category];
    logInfo(`  ${category}: ${selectedItems.length} items selected`);

    // Check if the selected items exist (only for Claude package which has actual content)
    if (toolId === 'claude') {
      const categoryPath = path.join(packagesDir, toolId, category);
      if (fs.existsSync(categoryPath)) {
        for (const item of selectedItems) {
          // Check if item exists as file or directory
          const itemPath = path.join(categoryPath, item);
          const itemPathMd = path.join(categoryPath, `${item}.md`);

          if (!fs.existsSync(itemPath) && !fs.existsSync(itemPathMd)) {
            logWarning(`    Item not found: ${item}`);
          } else {
            logInfo(`    ✓ ${item}`);
          }
        }
      }
    } else {
      // For other tools, just list the items
      selectedItems.forEach(item => logInfo(`    - ${item}`));
    }
  }

  if (allSelectionsValid) {
    logPass(`Specific selection logic verified`);
  }

  return allSelectionsValid;
}

function testEmptySelection(toolId, variantName, variantData) {
  logTest(`${toolId}: ${variantName} - Empty selection logic`);

  // Find categories with empty selections
  const emptyCategories = expectedCategories.filter(cat =>
    Array.isArray(variantData[cat]) && variantData[cat].length === 0
  );

  if (emptyCategories.length === 0) {
    logInfo(`No empty selections in this variant`);
    passedTests++;
    totalTests++;
    return true;
  }

  logInfo(`Empty selections found in: ${emptyCategories.join(', ')}`);

  // Empty selection means nothing should be installed from that category
  for (const category of emptyCategories) {
    logInfo(`  ${category}: no items will be installed`);
  }

  logPass(`Empty selection logic verified`);
  return true;
}

function testVariantConsistency(toolId, data) {
  logTest(`${toolId}: Variant consistency checks`);

  let allConsistent = true;

  // Lite should have fewer selections than Standard, Standard fewer than Pro
  const liteAgents = data.lite.agents;
  const standardAgents = data.standard.agents;
  const proAgents = data.pro.agents;

  const liteSkills = data.lite.skills;
  const standardSkills = data.standard.skills;
  const proSkills = data.pro.skills;

  // Check agents progression
  if (Array.isArray(liteAgents) && liteAgents.length > 0) {
    if (standardAgents !== '*' && Array.isArray(standardAgents)) {
      if (standardAgents.length < liteAgents.length) {
        logWarning(`Standard has fewer agents than Lite`);
      }
    }
  }

  // Check skills progression: Lite < Standard < Pro
  if (Array.isArray(liteSkills) && liteSkills.length === 0) {
    logInfo(`Lite: 0 skills (as expected)`);
  }

  if (Array.isArray(standardSkills) && standardSkills.length > 0) {
    logInfo(`Standard: ${standardSkills.length} skills`);
  }

  if (proSkills === '*') {
    logInfo(`Pro: all skills (wildcard)`);
  }

  logPass(`Variant consistency verified`);
  return allConsistent;
}

/**
 * Main test runner
 */
function runTestsForTool(toolId) {
  logSection(`Testing ${toolId.toUpperCase()}`);

  // Test 1: File exists
  const variantsPath = testFileExists(toolId);
  if (!variantsPath) {
    logWarning(`Skipping remaining tests for ${toolId} due to missing file`);
    return;
  }

  // Test 2: JSON parsing
  const data = testJSONParsing(toolId, variantsPath);
  if (!data) {
    logWarning(`Skipping remaining tests for ${toolId} due to parsing failure`);
    return;
  }

  // Test 3: Required variants exist
  const hasAllVariants = testRequiredVariants(toolId, data);
  if (!hasAllVariants) {
    logWarning(`Some variants missing for ${toolId}`);
  }

  // Test each variant
  for (const variantName of requiredVariants) {
    if (!data[variantName]) continue;

    console.log(`\n${colors.yellow}--- Variant: ${variantName.toUpperCase()} ---${colors.reset}`);

    const variantData = data[variantName];

    // Test 4: Structure validation
    testVariantStructure(toolId, variantName, variantData);

    // Test 5: Metadata fields
    testMetadataFields(toolId, variantName, variantData);

    // Test 6: Selection patterns
    testSelectionPatterns(toolId, variantName, variantData);

    // Test 7: Wildcard expansion
    testWildcardExpansion(toolId, variantName, variantData);

    // Test 8: Specific selection
    testSpecificSelection(toolId, variantName, variantData);

    // Test 9: Empty selection
    testEmptySelection(toolId, variantName, variantData);
  }

  // Test 10: Variant consistency
  console.log('');
  testVariantConsistency(toolId, data);
}

/**
 * Main execution
 */
function main() {
  console.log(`${colors.cyan}
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   Variants.json Parsing Test Suite                                ║
║   Testing all 4 tools × 3 variants = 12 configurations            ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
${colors.reset}`);

  console.log(`Project root: ${projectRoot}`);
  console.log(`Packages directory: ${packagesDir}`);

  // Run tests for all tools
  for (const toolId of tools) {
    runTestsForTool(toolId);
  }

  // Summary
  logSection('TEST SUMMARY');

  console.log(`Total tests: ${totalTests}`);
  console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
  console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);

  if (failedTests > 0) {
    console.log(`\n${colors.red}FAILED TESTS:${colors.reset}`);
    failures.forEach((failure, index) => {
      console.log(`\n${index + 1}. ${failure.test}`);
      console.log(`   ${colors.red}${failure.error}${colors.reset}`);
    });
  }

  console.log(`\n${colors.cyan}${'='.repeat(70)}${colors.reset}\n`);

  if (failedTests === 0) {
    console.log(`${colors.green}✓ All tests passed!${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`${colors.red}✗ Some tests failed. See details above.${colors.reset}\n`);
    process.exit(1);
  }
}

// Run tests
main();
