# Agentic Toolkit - Publication Guide

Complete step-by-step instructions for publishing to Claude Code Marketplace, npm Registry, and GitHub.

## Table of Contents
1. [Pre-Publication Checklist](#pre-publication-checklist)
2. [Publishing to Claude Code Marketplace](#publishing-to-claude-code-marketplace)
3. [Publishing to npm Registry](#publishing-to-npm-registry)
4. [Creating GitHub Release](#creating-github-release)
5. [Post-Publication Tasks](#post-publication-tasks)
6. [Troubleshooting Publication Issues](#troubleshooting-publication-issues)

## Pre-Publication Checklist

Before publishing, verify all items in `DEPLOYMENT-CHECKLIST.md`:

```bash
# Quick verification commands
npm run validate          # Validate all manifests
npm test                 # Run full test suite
git status              # Ensure clean working directory
git log --oneline -5    # Verify recent commits
```

Ensure you have:
- [ ] npm account with publishing rights
- [ ] GitHub account with repository access
- [ ] Claude Code CLI installed and configured
- [ ] Git installed and configured
- [ ] All documentation reviewed and complete

## Publishing to Claude Code Marketplace

### Prerequisites
1. Claude Code CLI installed (`claude --version`)
2. Authenticated with Claude Code account
3. All manifests validated
4. Documentation complete

### Standard Variant (Default)

**Step 1: Prepare Plugin**
```bash
cd /path/to/agentic-toolkit

# Verify plugin structure
ls -la .claude-plugin/plugin-standard.json
npm run validate
```

**Step 2: Review Plugin Information**
```json
{
  "name": "Agentic Toolkit - Standard",
  "version": "1.0.0",
  "description": "Standard variant with all 13 agents and 8 core production skills"
}
```

**Step 3: Publish to Marketplace**
```bash
# Publish standard variant
claude publish agentic-kit --version 1.0.0

# Follow prompts:
# - Confirm plugin name
# - Select variant: Standard
# - Confirm description
# - Approve marketplace listing
```

**Step 4: Verify Publication**
```bash
# Check published status
claude list-plugins

# Search in marketplace
# Navigate to Claude Code Marketplace and search "agentic-kit"
```

### Lite Variant

**Step 1: Build Lite Distribution**
```bash
# Create lite variant directory
mkdir -p dist/agentic-kit-lite
cp .claude-plugin/plugin-lite.json dist/agentic-kit-lite/plugin.json
cp agents/master.md agents/orchestrator.md agents/scrum-master.md dist/agentic-kit-lite/agents/
cp -r resources/ dist/agentic-kit-lite/
cp -r hooks/ dist/agentic-kit-lite/
cp QUICK-START.md README.md dist/agentic-kit-lite/
```

**Step 2: Publish Lite Variant**
```bash
claude publish agentic-kit-lite --version 1.0.0

# Follow prompts:
# - Confirm plugin name: "Agentic Toolkit - Lite"
# - Select variant: Lite
# - Confirm description: "Lightweight variant with 3 core agents"
# - Approve marketplace listing
```

**Step 3: Verify Lite Publication**
```bash
claude list-plugins | grep lite
```

### Pro Variant

**Step 1: Build Pro Distribution**
```bash
# Create pro variant directory
mkdir -p dist/agentic-kit-pro
cp .claude-plugin/plugin-pro.json dist/agentic-kit-pro/plugin.json
cp -r agents/ dist/agentic-kit-pro/
cp -r skills/ dist/agentic-kit-pro/
cp -r resources/ dist/agentic-kit-pro/
cp -r hooks/ dist/agentic-kit-pro/
cp QUICK-START.md README.md SKILLS.md dist/agentic-kit-pro/
```

**Step 2: Publish Pro Variant**
```bash
claude publish agentic-kit-pro --version 1.0.0

# Follow prompts:
# - Confirm plugin name: "Agentic Toolkit - Pro"
# - Select variant: Pro
# - Confirm description: "Pro variant with all 13 agents and 16 skills"
# - Approve marketplace listing
```

**Step 3: Verify Pro Publication**
```bash
claude list-plugins | grep pro
```

### Marketplace Listing Optimization

**Enhance Marketplace Visibility**:
1. Use `MARKETPLACE-KEYWORDS.txt` keywords in description
2. Ensure plugin icon meets `MARKETPLACE-ICON.md` specifications
3. Include variant comparison in marketplace description
4. Add use case examples
5. Link to documentation

**Update Marketplace After Publication**:
1. Login to Claude Code Marketplace
2. Navigate to your published plugin
3. Add:
   - Detailed description from `MARKETPLACE-DESCRIPTION.md`
   - Keywords from `MARKETPLACE-KEYWORDS.txt`
   - Plugin icon (256x256 or larger)
   - Screenshots showing key features
   - Links to documentation

## Publishing to npm Registry

### Prerequisites
1. npm account (create at https://www.npmjs.com/signup)
2. npm login credentials
3. Verified email address on npm account
4. Publishing rights for package names

### Step 1: Prepare npm Publishing

**Login to npm**:
```bash
npm login
# Enter username
# Enter password
# Enter OTP (if 2FA enabled)
```

**Verify npm Configuration**:
```bash
npm whoami                    # Confirm logged in user
cat ~/.npmrc                 # Check npm configuration
npm view agentic-kit        # Check if name available (should fail on first publish)
```

### Step 2: Publish Standard Variant

**Prepare Package**:
```bash
cd /path/to/agentic-toolkit

# Verify package.json
cat package.json | grep -E "name|version|description"

# Ensure version is 1.0.0
npm version                  # Check current version
```

**Publish to npm**:
```bash
# Dry run (test without publishing)
npm publish --dry-run

# Actual publish
npm publish

# Verify publication
npm view agentic-kit
npm info agentic-kit
```

**Verify Publication**:
```bash
# Check npm registry
curl https://registry.npmjs.org/agentic-kit

# Install and verify
npm install agentic-kit --dry-run
```

### Step 3: Publish Lite Variant

**Create Lite package.json**:
```bash
mkdir -p dist/agentic-kit-lite
cat > dist/agentic-kit-lite/package.json <<EOF
{
  "name": "agentic-kit-lite",
  "version": "1.0.0",
  "description": "Lightweight variant with 3 core agents and no skills",
  "main": "plugin.json",
  "keywords": ["agents", "ai-agents", "workflow-automation", "lite"],
  "author": "Anthropic",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/anthropics/agentic-toolkit"
  }
}
EOF
```

**Publish Lite**:
```bash
cd dist/agentic-kit-lite
npm publish

# Verify
npm view agentic-kit-lite
```

### Step 4: Publish Pro Variant

**Create Pro package.json**:
```bash
mkdir -p dist/agentic-kit-pro
cat > dist/agentic-kit-pro/package.json <<EOF
{
  "name": "agentic-kit-pro",
  "version": "1.0.0",
  "description": "Pro variant with all 13 agents and 16 skills for maximum capabilities",
  "main": "plugin.json",
  "keywords": ["agents", "ai-agents", "workflow-automation", "pro", "advanced"],
  "author": "Anthropic",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/anthropics/agentic-toolkit"
  }
}
EOF
```

**Publish Pro**:
```bash
cd dist/agentic-kit-pro
npm publish

# Verify
npm view agentic-kit-pro
```

### Step 5: Verify All npm Packages

```bash
# List all published packages
npm view agentic-kit
npm view agentic-kit-lite
npm view agentic-kit-pro

# Check details
npm info agentic-kit version
npm info agentic-kit-lite version
npm info agentic-kit-pro version

# Search on npm registry
curl "https://registry.npmjs.org/-/v1/search?text=agentic-kit"
```

### npm Package Management

**Update Package Info**:
```bash
# Update package metadata
npm profile set <field> <value>

# View your packages
npm owner list agentic-kit

# Add package owner
npm owner add <user> agentic-kit
```

**Handle Publishing Errors**:
```bash
# If package exists with higher version, bump version
npm version minor    # 1.0.0 -> 1.1.0
npm publish

# If publishing failed, check logs
npm publish 2>&1 | tee publish.log

# Check what would be published
npm pack --dry-run
```

## Creating GitHub Release

### Step 1: Prepare Git Repository

**Ensure Clean Repository**:
```bash
git status              # Should be clean
git log --oneline -5    # Review recent commits
```

**Update Version Information**:
```bash
# Verify all versions are 1.0.0
grep -r "\"version\": \"1.0.0\"" .

# Verify all tags are removed (if restarting)
git tag -l              # List all tags
git tag -d v1.0.0      # Delete if exists (use caution)
```

### Step 2: Create Git Tag

**Create Annotated Tag**:
```bash
# Create version tag
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"

# Verify tag created
git tag -l
git show v1.0.0

# Push tag to remote
git push origin v1.0.0
```

### Step 3: Create GitHub Release

**Using GitHub CLI**:
```bash
# Create release from tag
gh release create v1.0.0 \
  --title "Agentic Toolkit v1.0.0" \
  --notes-file RELEASE-NOTES.md

# Verify release created
gh release list
gh release view v1.0.0
```

**Using GitHub Web Interface**:
1. Navigate to https://github.com/anthropics/agentic-toolkit/releases
2. Click "Draft a new release"
3. Select tag: `v1.0.0`
4. Title: "Agentic Toolkit v1.0.0 - Initial Release"
5. Description: Copy from `RELEASE-NOTES.md`
6. Add release assets (optional):
   - Source code tarball
   - npm package tarballs
   - Checksums
7. Check "This is a pre-release" (if applicable)
8. Publish release

### Step 4: Update GitHub Repository

**Update Repository Settings**:
1. Go to repository settings
2. Add topics: `agents`, `ai-agents`, `marketplace-plugin`, `workflow-automation`
3. Update description: "Agentic Toolkit - AI-powered software development platform"
4. Set homepage: https://github.com/anthropics/agentic-toolkit

**Update Repository README**:
```bash
# Add release badge to README.md
# Example format:
# ![Release](https://img.shields.io/github/v/release/anthropics/agentic-toolkit)
# ![npm version](https://img.shields.io/npm/v/agentic-kit)
```

### Step 5: Verify Release

```bash
# Check release on GitHub
gh release view v1.0.0

# Verify assets uploaded (if any)
gh release list

# Check GitHub release page
# https://github.com/anthropics/agentic-toolkit/releases/tag/v1.0.0
```

## Post-Publication Tasks

### Step 1: Verify All Platforms

**Marketplace Check**:
```bash
# Search for plugin in Claude Code
claude search agentic-kit

# Verify all three variants appear
claude search agentic-kit-lite
claude search agentic-kit-pro
```

**npm Check**:
```bash
# Verify on npm registry
npm view agentic-kit
npm view agentic-kit-lite
npm view agentic-kit-pro

# Test installation
npm install agentic-kit --save-dev
npm install agentic-kit-lite --save-dev
npm install agentic-kit-pro --save-dev
```

**GitHub Check**:
```bash
# Verify release
gh release view v1.0.0

# Check tags
git ls-remote --tags origin | grep v1.0.0
```

### Step 2: Installation Verification

**Test Standard Installation**:
```bash
# In a new directory
mkdir test-install
cd test-install

# Test npm installation
npm init -y
npm install agentic-kit

# Verify contents
ls node_modules/agentic-kit/
cat node_modules/agentic-kit/package.json
```

**Test Claude Code Installation**:
```bash
# Install from marketplace
claude install agentic-kit

# Verify installation
claude list-plugins | grep agentic-kit

# Test agent access
claude list-agents | grep Master
```

### Step 3: Documentation Updates

**Update README.md**:
```markdown
## Installation

### From Claude Code Marketplace
```bash
claude install agentic-kit
```

### From npm Registry
```bash
npm install agentic-kit
```

### GitHub
https://github.com/anthropics/agentic-toolkit
```

**Create Installation Guides**:
- Update QUICK-START.md with installation badges
- Add marketplace links
- Add npm package links
- Link to release notes

### Step 4: Announce Release

**Update Channels**:
1. **GitHub**: Post release announcement in discussions
2. **Community**: Share in relevant forums/communities
3. **Social Media**: Announce on appropriate channels
4. **Documentation**: Update website/wiki with links

**Release Announcement Template**:
```
Title: Agentic Toolkit v1.0.0 Released

We're excited to announce the release of Agentic Toolkit v1.0.0,
a comprehensive AI-driven software development platform.

Features:
- 13 specialized agents for every role
- Three distribution variants (Lite, Standard, Pro)
- 16 powerful skills in Pro variant
- Complete documentation and examples
- Production-ready and marketplace-approved

Installation:
- Claude Code Marketplace: `claude install agentic-kit`
- npm Registry: `npm install agentic-kit`
- GitHub: https://github.com/anthropics/agentic-toolkit

Documentation:
- Quick Start: [link]
- Full Documentation: [link]
- Release Notes: [link]

We appreciate your support!
```

### Step 5: Monitor Initial Release

**First 24 Hours**:
- [ ] Monitor marketplace for feedback
- [ ] Check npm downloads
- [ ] Watch GitHub issues for bugs
- [ ] Respond to user questions
- [ ] Monitor analytics (if available)

**First Week**:
- [ ] Collect user feedback
- [ ] Identify common issues
- [ ] Plan any necessary hotfixes
- [ ] Update documentation based on feedback

**First Month**:
- [ ] Review analytics
- [ ] Assess user adoption
- [ ] Plan v1.1.0 features
- [ ] Prepare roadmap updates

## Troubleshooting Publication Issues

### npm Publishing Issues

**Package Already Exists**:
```bash
# If package name taken, choose alternative
npm view <alternative-name>

# Update package.json with new name
# Update documentation with new package name
```

**Authentication Failed**:
```bash
# Re-authenticate
npm logout
npm login

# Check token
npm token list

# Verify credentials
cat ~/.npmrc
```

**Publishing Blocked**:
```bash
# Check package restrictions
npm view agentic-kit

# Verify no unpublish window
# (Unpublish only available 72 hours after publish)

# Check for publishing policies
npm profile get
```

### Marketplace Publishing Issues

**Plugin Validation Failed**:
```bash
# Validate manifests
npm run validate

# Check manifest format
python3 -m json.tool .claude-plugin/plugin-standard.json

# Verify all referenced files exist
npm run build:standard
```

**Plugin Not Appearing**:
```bash
# Check publication status
claude list-plugins

# Verify marketplace cache
# Wait up to 1 hour for marketplace refresh

# Check marketplace directly
# https://marketplace.claude.ai
```

### GitHub Release Issues

**Tag Already Exists**:
```bash
# Delete tag locally
git tag -d v1.0.0

# Delete tag remotely
git push origin --delete v1.0.0

# Create new tag
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

**Release Not Showing**:
```bash
# Verify tag pushed
git ls-remote --tags origin

# Check GitHub release page (might need refresh)
# https://github.com/anthropics/agentic-toolkit/releases

# Verify release visibility (not draft)
gh release view v1.0.0
```

## Rollback Procedures

### Unpublish from npm (Within 72 hours)
```bash
# Only possible within 72 hours of publish
npm unpublish agentic-kit@1.0.0

# After 72 hours, deprecate instead
npm deprecate agentic-kit@1.0.0 "Use v1.0.1 instead"
```

### Unpublish from Marketplace
```bash
# Remove from marketplace
claude unpublish agentic-kit

# Or via marketplace web interface
# Navigate to published plugin and unpublish
```

### Delete GitHub Release
```bash
# Delete release (tag remains)
gh release delete v1.0.0

# Delete tag
git tag -d v1.0.0
git push origin --delete v1.0.0
```

## Success Criteria

Publication is successful when:

- [ ] All three npm packages published and installable
- [ ] All three marketplace variants published and discoverable
- [ ] GitHub release created with release notes
- [ ] All installations verify correctly
- [ ] No critical issues reported
- [ ] Documentation links work
- [ ] Users can successfully install and use toolkit

## Support Resources

**During Publication**:
- npm Docs: https://docs.npmjs.com/cli
- GitHub CLI: https://cli.github.com/manual
- Claude Code Docs: [marketplace-url]
- Repository Issues: https://github.com/anthropics/agentic-toolkit/issues

**Post-Publication**:
- Monitor GitHub issues
- Respond to user feedback
- Plan maintenance releases
- Prepare for v1.1.0

---

**Last Updated**: November 1, 2025
**Status**: Ready for Publication
