# Agentic Toolkit - Deployment Checklist

This checklist ensures comprehensive verification before marketplace submission and npm publication.

## Pre-Deployment Validation

### Code Quality
- [ ] All tests pass (`npm test`)
- [ ] No console.log or debug statements in production code
- [ ] No commented-out code blocks
- [ ] No temporary files or placeholders
- [ ] Code follows project conventions
- [ ] All agents markdown files validated
- [ ] All skills properly structured

### Documentation
- [ ] README.md complete and up-to-date
- [ ] QUICK-START.md has clear instructions
- [ ] AGENTS.md lists all 13 agents with descriptions
- [ ] SKILLS.md documents all skills properly
- [ ] ARCHITECTURE.md explains system design
- [ ] CONTRIBUTING.md includes development guidelines
- [ ] TROUBLESHOOTING.md addresses common issues
- [ ] VARIANTS.md explains all three variants
- [ ] VARIANT-BUILD-GUIDE.md is detailed and accurate
- [ ] RELEASE-NOTES.md contains version information
- [ ] CHANGELOG.md is properly formatted
- [ ] All cross-references between docs are accurate

### Plugin Manifests
- [ ] `.claude-plugin/plugin.json` is valid JSON
- [ ] `.claude-plugin/plugin-lite.json` is valid JSON
- [ ] `.claude-plugin/plugin-standard.json` is valid JSON
- [ ] `.claude-plugin/plugin-pro.json` is valid JSON
- [ ] All agent paths in manifests are correct
- [ ] All skill paths in manifests are correct
- [ ] All hook references are valid
- [ ] Resources path is correctly specified
- [ ] Version numbers match (1.0.0)
- [ ] Variant names are consistent

### Package Configuration
- [ ] `package.json` exists in root directory
- [ ] Package name is "agentic-kit"
- [ ] Version is "1.0.0"
- [ ] Description is accurate
- [ ] Keywords are comprehensive and accurate
- [ ] Author is "Anthropic"
- [ ] License is "MIT"
- [ ] Repository URL is valid
- [ ] Bugs URL is valid
- [ ] Homepage URL is valid
- [ ] Files array includes all necessary files
- [ ] Engines specifies Node.js 14.0.0+
- [ ] Variants metadata is present and accurate

### Marketplace Content
- [ ] `MARKETPLACE-DESCRIPTION.md` is complete
- [ ] Description includes plugin name and tagline
- [ ] Overview is 2-3 sentences
- [ ] Key features list is clear and organized
- [ ] Target audience is well-defined
- [ ] Variant comparison table is accurate
- [ ] Installation instructions are clear
- [ ] Use cases are practical and relevant
- [ ] `MARKETPLACE-KEYWORDS.txt` has 30+ keywords
- [ ] Keywords are SEO-appropriate
- [ ] `MARKETPLACE-ICON.md` has clear specifications
- [ ] Icon design guide is detailed

### Security & Compliance
- [ ] No API keys or secrets in code
- [ ] No hardcoded credentials
- [ ] No sensitive data in configuration files
- [ ] No vulnerable npm dependencies
- [ ] All external URLs are HTTPS
- [ ] No tracking or telemetry code
- [ ] License file (MIT) is included
- [ ] No proprietary or restricted code
- [ ] No copyright violations in resources

### File Structure
- [ ] All referenced files exist in correct locations
- [ ] Directory structure is organized
- [ ] No unnecessary files included
- [ ] Proper .gitignore rules applied
- [ ] Build artifacts excluded
- [ ] Dependencies excluded from package
- [ ] Large files are justified

### Agent Files
- [ ] All 13 agent markdown files exist in `/agents`
  - [ ] master.md
  - [ ] orchestrator.md
  - [ ] product-manager.md
  - [ ] product-owner.md
  - [ ] business-analyst.md
  - [ ] full-stack-dev.md
  - [ ] holistic-architect.md
  - [ ] ux-expert.md
  - [ ] qa-test-architect.md
  - [ ] scrum-master.md
  - [ ] 1-create-prd.md
  - [ ] 2-generate-tasks.md
  - [ ] 3-process-task-list.md
- [ ] Each agent file is properly formatted
- [ ] Each agent has clear description
- [ ] Each agent has defined capabilities
- [ ] Agent responsibilities are clear and distinct

### Skills Files
- [ ] All skill directories exist in `/skills`
- [ ] Each skill has manifest or index file
- [ ] Core 8 skills present for Standard variant:
  - [ ] pdf/
  - [ ] docx/
  - [ ] xlsx/
  - [ ] pptx/
  - [ ] canvas-design/
  - [ ] theme-factory/
  - [ ] brand-guidelines/
  - [ ] internal-comms/
- [ ] Additional 8 skills present for Pro variant:
  - [ ] algorithmic-art/
  - [ ] artifacts-builder/
  - [ ] mcp-builder/
  - [ ] skill-creator/
  - [ ] webapp-testing/
  - [ ] slack-gif-creator/
  - [ ] template-skill/

### Resources
- [ ] Resources directory exists
- [ ] Contains templates and utilities
- [ ] Resources are properly organized
- [ ] No duplicate or outdated resources
- [ ] Resource files are accessible
- [ ] Documentation references resources

## Pre-Marketplace Submission

### Marketplace Compliance
- [ ] Plugin name follows naming conventions
- [ ] Plugin description is clear and concise
- [ ] All required metadata present
- [ ] No misleading claims in description
- [ ] Screenshots/demos provided (if applicable)
- [ ] Icon created and optimized
- [ ] Tags/categories appropriate
- [ ] Variant descriptions are accurate
- [ ] Pricing (free) is clearly stated

### Variant Verification
- [ ] Lite variant can be built and installed
- [ ] Standard variant can be built and installed
- [ ] Pro variant can be built and installed
- [ ] Each variant loads agents correctly
- [ ] Each variant has correct skill set
- [ ] Lite has 3 agents, 0 skills
- [ ] Standard has 13 agents, 8 skills
- [ ] Pro has 13 agents, 16 skills
- [ ] Manifests match actual contents
- [ ] Installation instructions are variant-specific

### Testing in Claude Code
- [ ] Plugin can be installed via marketplace
- [ ] All agents appear in agent list
- [ ] Agents are invocable from Claude Code
- [ ] Agent descriptions display correctly
- [ ] Skills are accessible from agents
- [ ] Resources are loadable
- [ ] Plugin loads without errors
- [ ] Plugin uninstalls cleanly

### Marketplace Assets
- [ ] Icon file created or identified
- [ ] Icon meets specification requirements
- [ ] Icon looks professional at all sizes
- [ ] Logo/branding is consistent
- [ ] Screenshots showcase key features (if used)
- [ ] Demo links work (if provided)
- [ ] Variant comparison graphic ready (optional)

## Pre-npm Publication

### npm Registry Compliance
- [ ] Package name is available on npm
- [ ] Package name is appropriate and discoverable
- [ ] Version number follows semver (1.0.0)
- [ ] Package.json is valid and complete
- [ ] License is clearly specified (MIT)
- [ ] Repository link is valid
- [ ] Homepage URL is valid
- [ ] Bug report URL is valid
- [ ] Keywords are comprehensive
- [ ] Description is accurate

### npm Distribution
- [ ] Package structure is correct
- [ ] All necessary files included in "files" array
- [ ] Build/dev artifacts excluded
- [ ] node_modules not included
- [ ] .git folder not included
- [ ] Package size is reasonable
- [ ] README.md is in root
- [ ] LICENSE file is in root
- [ ] package.json main points to valid entry

### npm Testing
- [ ] `npm install` succeeds
- [ ] Installed package has correct structure
- [ ] All referenced files accessible after install
- [ ] Plugin loads correctly when installed
- [ ] No dependency conflicts
- [ ] No security vulnerabilities in dependencies

### Variant Packages
- [ ] Variant packages have correct names
- [ ] agentic-kit-lite package verified
- [ ] agentic-kit package verified
- [ ] agentic-kit-pro package verified
- [ ] Each variant has accurate metadata
- [ ] Install instructions are correct for each

## Pre-GitHub Release

### GitHub Configuration
- [ ] Repository is public
- [ ] Repository description is clear
- [ ] Repository topics are set: agents, skills, marketplace-plugin
- [ ] README.md is in repository root
- [ ] LICENSE file is present
- [ ] CONTRIBUTING.md is present
- [ ] .gitignore is configured correctly
- [ ] Release template is defined (if used)

### Release Documentation
- [ ] RELEASE-NOTES.md is complete
- [ ] CHANGELOG.md is comprehensive
- [ ] Release tag name is v1.0.0
- [ ] Release title is clear: "Agentic Toolkit v1.0.0"
- [ ] Release description includes:
  - [ ] What's new (summary)
  - [ ] Key features
  - [ ] Installation instructions
  - [ ] Links to documentation
  - [ ] Known issues (if any)
- [ ] Release assets included (if applicable)

### GitHub Release Assets
- [ ] Source code tarball provided
- [ ] npm package tarball provided (optional)
- [ ] Checksums generated (optional)
- [ ] Digital signatures provided (if security required)

## Final Validation

### Comprehensive Test Run
```bash
# Run all validation
npm run validate      # Validate manifests
npm test             # Run test suite
npm run lint         # Lint code (if configured)
```

### Checklist Review
- [ ] Completed all items in this checklist
- [ ] No items marked as "N/A" without documentation
- [ ] All deviations from checklist are documented
- [ ] Project lead has reviewed checklist
- [ ] No outstanding issues or TODOs

### File Integrity
```bash
# Verify all files are present
find . -type f -name "*.md" | sort
find . -type f -name "*.json" | sort
find agents -type f -name "*.md"
find skills -type d
```

### Documentation Completeness
- [ ] At least 10 markdown documentation files present
- [ ] All documentation is cross-referenced
- [ ] No broken links in documentation
- [ ] Code examples are accurate
- [ ] All features documented
- [ ] Setup instructions are clear

### Git Status Check
```bash
git status              # Should be clean
git log --oneline -10   # Review recent commits
git tag -l              # Verify v1.0.0 tag exists
```

## Go/No-Go Decision Points

### Go Criteria (All Must Be True)
- [ ] All checklist items completed
- [ ] All tests passing
- [ ] No critical issues
- [ ] Documentation complete
- [ ] Manifests valid
- [ ] Security verified
- [ ] Team approval obtained

### No-Go Triggers (Any One Blocks Release)
- [ ] Failed tests
- [ ] Security vulnerabilities
- [ ] Missing documentation
- [ ] Invalid manifests
- [ ] Hardcoded secrets
- [ ] Broken links in documentation
- [ ] Missing key files

### Decision: GO / NO-GO (Circle One)

**Date**: _______________
**Reviewed By**: _______________
**Notes**: _______________

## Publication Steps (After Go Decision)

### Step 1: GitHub Release
```bash
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"
git push origin v1.0.0
# Create release on GitHub with RELEASE-NOTES.md content
```

### Step 2: npm Publication
```bash
# Standard variant
npm publish

# Lite and Pro variants (as separate packages)
# Refer to VARIANT-BUILD-GUIDE.md for details
```

### Step 3: Marketplace Submission
```bash
# Use Claude Code CLI
claude publish agentic-kit
claude publish agentic-kit-lite
claude publish agentic-kit-pro
```

### Step 4: Announcement
- [ ] Update GitHub README with release badge
- [ ] Post release announcement
- [ ] Share with community
- [ ] Update any external documentation

## Post-Publication

### Monitor & Support
- [ ] Monitor marketplace for feedback
- [ ] Monitor npm package for issues
- [ ] Watch GitHub issues for bug reports
- [ ] Respond to user questions
- [ ] Track installation numbers
- [ ] Monitor error reports

### First 30-Day Review
- [ ] Collect user feedback
- [ ] Identify common issues
- [ ] Plan hotfixes (if needed)
- [ ] Prepare v1.0.1 patch (if critical issues found)
- [ ] Plan v1.1.0 features

### Ongoing Maintenance
- [ ] Keep documentation updated
- [ ] Fix reported bugs promptly
- [ ] Update dependencies
- [ ] Monitor security
- [ ] Plan future releases

## Sign-Off

**Prepared By**: _______________
**Date**: _______________
**Approved By**: _______________
**Date**: _______________

---

**Notes**:
Use this checklist as the definitive verification before any publication. All items must be addressed. Mark items as "N/A" only with documented justification. Distribute this completed checklist to all stakeholders before final publication.
