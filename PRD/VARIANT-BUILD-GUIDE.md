# Agentic Toolkit - Variant Build Guide

This document describes how the three distribution variants are built, packaged, and distributed.

## Overview

The Agentic Toolkit is distributed in three variants optimized for different use cases:

1. **Lite** - Minimal footprint, core orchestration only
2. **Standard** - Recommended for most users, balanced feature set
3. **Pro** - Full capabilities for advanced users and designers

Each variant is built from the same source code but packaged with different agents and skills included.

## Variant Specifications

### Lite Variant
**Package Name**: `agentic-kit-lite`

**Included**:
- 3 Core Agents:
  - Master (Central orchestration)
  - Orchestrator (Task orchestration and workflow management)
  - Scrum Master (Project management and team coordination)
- 0 Skills (lightweight, minimal dependencies)
- Core Resources (templates, utilities)
- Plugin Manifest: `.claude-plugin/plugin-lite.json`

**Size**: ~2-5 MB
**Target Users**: Minimal setups, CI/CD integration, embedded systems, low-resource environments

**Capabilities**:
- Basic workflow orchestration
- Task coordination
- Project management essentials
- Minimal external dependencies

**Not Included**:
- Design capabilities
- Document processing
- Advanced development tools

### Standard Variant
**Package Name**: `agentic-kit` (default)

**Included**:
- All 13 Agents (complete team)
- 8 Core Production Skills:
  - PDF - PDF manipulation and document processing
  - DOCX - Word document creation and editing
  - XLSX - Spreadsheet creation and analysis
  - PPTX - Presentation creation and management
  - Canvas Design - Visual design and artwork creation
  - Theme Factory - Theme and styling application
  - Brand Guidelines - Brand compliance and styling
  - Internal Communications - Communication templates
- Complete Resource Library
- Plugin Manifest: `.claude-plugin/plugin-standard.json`

**Size**: ~15-30 MB
**Target Users**: Most users, general-purpose development, content creation, product teams

**Capabilities**:
- Complete product development workflow (strategy through deployment)
- Document and presentation generation
- Design and branding support
- Project and team management
- Quality assurance and testing
- Full-stack development support

**Recommended For**:
- Software development teams
- Product managers
- Content creation teams
- Marketing and design teams
- Startup development

### Pro Variant
**Package Name**: `agentic-kit-pro`

**Included**:
- All 13 Agents (complete team)
- All 16 Skills (maximum capabilities):
  - All Standard skills (8):
    - PDF, DOCX, XLSX, PPTX, Canvas Design, Theme Factory, Brand Guidelines, Internal Communications
  - Advanced Skills (8):
    - Algorithmic Art - Generative art and algorithmic design
    - Artifacts Builder - Complex HTML artifact creation
    - MCP Builder - Model Context Protocol server creation
    - Skill Creator - Custom skill creation and development
    - Web App Testing - Web application testing toolkit
    - Slack GIF Creator - Animated GIF creation for Slack
    - Template Skill - Template skill for extending capabilities
    - (Additional advanced capabilities)
- Complete Resource Library
- Plugin Manifest: `.claude-plugin/plugin-pro.json`

**Size**: ~40-60 MB
**Target Users**: Advanced users, designers, developers, enterprise teams

**Capabilities**:
- All Standard variant capabilities
- Advanced generative art and algorithmic design
- Complex HTML/web artifact creation
- Custom MCP server development
- Custom skill creation
- Web application testing
- Slack integration and GIF creation
- Extensibility and customization capabilities

**Recommended For**:
- Advanced developers
- Design-focused teams
- Enterprise deployments
- Custom tool creators
- Integration-heavy workflows

## Build Process

### Prerequisites
- Node.js 14.0.0 or later
- Git for source control
- npm or yarn for package management

### Step 1: Prepare Source
```bash
cd /path/to/agentic-toolkit
git pull origin main
npm install
```

### Step 2: Validate Manifests
```bash
npm run validate
```

This validates all three plugin manifests:
- `.claude-plugin/plugin-lite.json`
- `.claude-plugin/plugin-standard.json`
- `.claude-plugin/plugin-pro.json`

### Step 3: Run Tests
```bash
npm test
```

Ensures all agents and skills are functioning correctly across all variants.

### Step 4: Build Variants

#### Build Lite
```bash
npm run build:lite
# Or manually:
mkdir -p dist/agentic-kit-lite
cp -r .claude-plugin/plugin-lite.json dist/agentic-kit-lite/
cp agents/master.md agents/orchestrator.md agents/scrum-master.md dist/agentic-kit-lite/agents/
cp -r resources/ dist/agentic-kit-lite/
cp -r hooks/ dist/agentic-kit-lite/
cp QUICK-START.md AGENTS.md README.md dist/agentic-kit-lite/
```

#### Build Standard
```bash
npm run build:standard
# Or manually:
mkdir -p dist/agentic-kit
cp .claude-plugin/plugin-standard.json dist/agentic-kit/plugin.json
cp -r agents/ dist/agentic-kit/
cp -r skills/ dist/agentic-kit/  # Include only: pdf, docx, xlsx, pptx, canvas-design, theme-factory, brand-guidelines, internal-comms
cp -r resources/ dist/agentic-kit/
cp -r hooks/ dist/agentic-kit/
cp README.md QUICK-START.md AGENTS.md SKILLS.md ARCHITECTURE.md dist/agentic-kit/
```

#### Build Pro
```bash
npm run build:pro
# Or manually:
mkdir -p dist/agentic-kit-pro
cp .claude-plugin/plugin-pro.json dist/agentic-kit-pro/plugin.json
cp -r agents/ dist/agentic-kit-pro/
cp -r skills/ dist/agentic-kit-pro/  # Include all skills
cp -r resources/ dist/agentic-kit-pro/
cp -r hooks/ dist/agentic-kit-pro/
cp README.md QUICK-START.md AGENTS.md SKILLS.md ARCHITECTURE.md dist/agentic-kit-pro/
```

### Step 5: Package for Distribution

#### Create npm packages
```bash
# Lite
cd dist/agentic-kit-lite
npm init -y
npm pack
mv agentic-kit-lite-1.0.0.tgz ../../

# Standard
cd ../agentic-kit
npm init -y
npm pack
mv agentic-kit-1.0.0.tgz ../../

# Pro
cd ../agentic-kit-pro
npm init -y
npm pack
mv agentic-kit-pro-1.0.0.tgz ../../
```

### Step 6: Publish

#### To Claude Code Marketplace
```bash
claude publish agentic-kit              # Standard variant
claude publish agentic-kit-lite         # Lite variant
claude publish agentic-kit-pro          # Pro variant
```

#### To npm Registry
```bash
npm publish agentic-kit-1.0.0.tgz
npm publish agentic-kit-lite-1.0.0.tgz
npm publish agentic-kit-pro-1.0.0.tgz
```

## Variant Selection Guide

### Choose Lite if you:
- Need minimal dependencies
- Run in resource-constrained environments
- Only need task orchestration and project management
- Use within CI/CD pipelines
- Want the fastest installation

### Choose Standard if you:
- Do general software development
- Need document and presentation generation
- Want design and branding support
- Work in product teams
- Need balanced features and size
- **This is the recommended default**

### Choose Pro if you:
- Do advanced design and visual work
- Create custom tools and extensions
- Need all 16 skills available
- Run enterprise deployments
- Want maximum capabilities
- Can use larger disk/memory footprint

## Manifest Structure

Each variant has a corresponding manifest file in `.claude-plugin/`:

### plugin.json (Default/Reference)
- Contains all variants' metadata
- Used for marketplace discovery
- Points to specific variant manifests

### plugin-lite.json
```json
{
  "name": "Agentic Toolkit - Lite",
  "version": "1.0.0",
  "variant": "lite",
  "agents": [ /* 3 agents */ ],
  "skills": [],
  "hooks": [ /* plugin loader */ ],
  "resources": { "path": "resources/" }
}
```

### plugin-standard.json
```json
{
  "name": "Agentic Toolkit - Standard",
  "version": "1.0.0",
  "variant": "standard",
  "agents": [ /* 13 agents */ ],
  "skills": [ /* 8 core skills */ ],
  "hooks": [ /* plugin loader */ ],
  "resources": { "path": "resources/" }
}
```

### plugin-pro.json
```json
{
  "name": "Agentic Toolkit - Pro",
  "version": "1.0.0",
  "variant": "pro",
  "agents": [ /* 13 agents */ ],
  "skills": [ /* 16 skills */ ],
  "hooks": [ /* plugin loader */ ],
  "resources": { "path": "resources/" }
}
```

## Verification Checklist

After building each variant, verify:

- [ ] All JSON manifests are valid
- [ ] All referenced agent files exist
- [ ] All referenced skill directories exist
- [ ] All resource files are included
- [ ] Hooks are correctly specified
- [ ] File permissions are correct
- [ ] Documentation is complete
- [ ] Version numbers match (1.0.0)
- [ ] Package can be installed without errors
- [ ] All agents load successfully
- [ ] All skills are available in context

## Distribution Files

### Files Included in All Variants
- `README.md` - Main documentation
- `QUICK-START.md` - Getting started guide
- `CONTRIBUTING.md` - Contribution guidelines
- `.claude-plugin/plugin-[variant].json` - Plugin manifest
- `hooks/register-agents.js` - Plugin loader
- `resources/` - Templates and utilities

### Files Included in Standard & Pro Only
- `AGENTS.md` - Complete agent documentation
- `SKILLS.md` - Complete skills documentation
- All agent files in `agents/` directory

### Files Included in Standard Only
- 8 Core skills in `skills/` directory

### Files Included in Pro Only
- All 16 skills in `skills/` directory

## Size Optimization

To minimize package size:

1. **Lite Variant**:
   - Exclude all skills directories
   - Include only 3 agent markdown files
   - Minimal resources folder (basic templates only)

2. **Standard Variant**:
   - Include only 8 core skill directories
   - All 13 agent files
   - Full resources folder

3. **Pro Variant**:
   - Include all 16 skill directories
   - All 13 agent files
   - Full resources folder

## Versioning

All variants share the same version number for releases:
- v1.0.0 - Initial release
- v1.1.0 - Feature updates
- v1.0.1 - Patch fixes

Update versions in:
1. `.claude-plugin/plugin.json`
2. `.claude-plugin/plugin-lite.json`
3. `.claude-plugin/plugin-standard.json`
4. `.claude-plugin/plugin-pro.json`
5. `package.json`
6. All variant package.json files

## Troubleshooting

### Build fails with missing agents
- Verify all agent markdown files exist in `/agents` directory
- Check manifest references match actual file paths
- Run `npm run validate` to identify issues

### Skills not loading in variant
- Confirm skill directory structure is correct
- Verify skill manifest files are present
- Check plugin manifest includes skill entry

### Package size is unexpectedly large
- Verify no duplicate files in variant directories
- Check for excluded files (tests, source maps, etc.)
- Review `.gitignore` rules

## Automation

To automate variant builds, create a script:

```bash
#!/bin/bash
# build-all-variants.sh

npm run validate || exit 1
npm test || exit 1

npm run build:lite
npm run build:standard
npm run build:pro

echo "All variants built successfully!"
```

## Next Steps

After building variants:
1. Test each variant in Claude Code
2. Verify agents are accessible
3. Confirm skills load correctly
4. Run marketplace submission checklist
5. Publish to marketplace and npm

See PUBLICATION-GUIDE.md for publishing instructions.
