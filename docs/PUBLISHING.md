# Publishing Guide - Agentic Kit

This guide documents how to publish Agentic Kit to npm.js, GitHub Packages, and Claude Code marketplaces.

---

## Table of Contents

1. [Quick Publishing](#quick-publishing)
2. [Publishing to npm.js](#publishing-to-npmjs)
3. [Publishing to GitHub Packages](#publishing-to-github-packages)
4. [Publishing to Both Registries](#publishing-to-both-registries)
5. [Publishing to Claude Code Marketplace](#publishing-to-claude-code-marketplace)
6. [Version Management](#version-management)
7. [Troubleshooting](#troubleshooting)

---

## Quick Publishing

### Publish to Both npm.js and GitHub Packages

```bash
# One command to publish everywhere!
npm run publish:both
```

**Requirements:**
- Logged into npm: `npm login`
- GitHub token set: `export GITHUB_TOKEN=ghp_your_token_here`
- See [First-Time Setup](#first-time-setup) below

### Individual Registries

```bash
# Just npm.js
npm run publish:npm

# Just GitHub Packages
npm run publish:github
```

---

## First-Time Setup

### Setup for npm.js

```bash
npm login
```

Enter your npm credentials when prompted.

### Setup for GitHub Packages

**One-time setup required.** See detailed guide: [`GITHUB_SETUP.md`](GITHUB_SETUP.md)

**Quick version:**

1. **Create GitHub Token:** https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `write:packages`, `read:packages`
   - Copy token (starts with `ghp_`)

2. **Set Environment Variable:**

   **Option A: Using `pass` (Recommended)** 🔐
   ```bash
   # Store token in pass
   pass insert amr/github

   # Export from pass (or the script will do it automatically!)
   export GITHUB_TOKEN=$(pass show amr/github)
   ```
   **See:** [PASS_INTEGRATION.md](PASS_INTEGRATION.md)

   **Option B: Direct export**
   ```bash
   # Linux/macOS
   export GITHUB_TOKEN=ghp_your_token_here

   # Add to ~/.bashrc or ~/.zshrc for persistence
   echo 'export GITHUB_TOKEN=ghp_your_token_here' >> ~/.bashrc
   ```

3. **Verify:**
   ```bash
   echo $GITHUB_TOKEN  # Should show your token
   ```

---

## Publishing to npm.js

### Prerequisites

- npm account (create at https://www.npmjs.com/signup)
- Access to the `@amrhas82/agentic-kit` package
- All changes committed to git

### Publishing Process

#### 1. Login to npm

```bash
npm login
```

#### 2. Validate Package

```bash
npm run validate
```

This checks:
- ✅ All manifest files exist and are valid JSON
- ✅ Variant configurations are correct
- ✅ All required files are present
- ✅ CLI script has proper shebang

#### 3. Publish

```bash
npm run publish:npm
```

Or manually:
```bash
npm publish --access public
```

#### 4. Verify Publication

Check your package page:
- https://www.npmjs.com/package/@amrhas82/agentic-kit

Test installation:
```bash
npx @amrhas82/agentic-kit --help
npx agentic-kit --variant=lite
```

---

## Publishing to GitHub Packages

### Prerequisites

- GitHub account with access to `amrhas82/agentic-kit` repository
- GitHub Personal Access Token (see [GITHUB_SETUP.md](GITHUB_SETUP.md))
- `GITHUB_TOKEN` environment variable set

### Publishing Process

#### 1. Verify GitHub Token

```bash
echo $GITHUB_TOKEN  # Should show ghp_...
```

If not set, see [First-Time Setup](#first-time-setup).

#### 2. Publish

```bash
npm run publish:github
```

Or manually:
```bash
npm publish --registry https://npm.pkg.github.com
```

#### 3. Verify Publication

1. Go to: https://github.com/amrhas82/agentic-kit
2. Click **"Packages"** on the right sidebar
3. You should see `@amrhas82/agentic-kit` listed

### Installing from GitHub Packages

Users need to configure their `.npmrc`:

```
@amrhas82:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=THEIR_GITHUB_TOKEN
```

Then install:
```bash
npm install @amrhas82/agentic-kit
```

---

## Publishing to Both Registries

### Automated (Recommended)

Use the publish script:

```bash
./publish.sh
```

Or npm script:
```bash
npm run publish:both
```

This will:
1. Validate package
2. Publish to npm.js
3. Publish to GitHub Packages (if `GITHUB_TOKEN` is set)

### Manual

```bash
# 1. Publish to npm.js
npm publish --registry https://registry.npmjs.org --access public

# 2. Publish to GitHub Packages
npm publish --registry https://npm.pkg.github.com
```

### Why Publish to Both?

**npm.js:**
- ✅ Easier for users (no GitHub token required)
- ✅ Works with `npx` out of the box
- ✅ Better discovery/SEO
- ✅ Standard npm workflow

**GitHub Packages:**
- ✅ Integrated with GitHub repository
- ✅ Shows up on repo page
- ✅ Easier access control (can be private)
- ✅ Better for GitHub-based workflows

---

## Publishing to Claude Code Marketplace

### Current Options (2025)

Claude Code doesn't have a centralized official Anthropic marketplace yet. There are three distribution methods:

### Option 1: Direct GitHub Installation ⭐ (Recommended)

Users can install directly from GitHub without marketplace approval:

```
/plugin add github:amrhas82/agentic-kit
```

**No submission required!** Works as soon as you push to GitHub.

**Requirements:**
- ✅ Repository must be public
- ✅ `.claude-plugin/` directory with manifests
- ✅ All plugin files in repository root

### Option 2: Create Your Own Marketplace

Host your own marketplace catalog: `.claude-plugin/marketplace.json`

```json
{
  "name": "Agentic Kit Official",
  "owner": "amrhas82",
  "description": "Official marketplace for Agentic Kit variants",
  "plugins": [
    {
      "name": "agentic-kit-standard",
      "source": "github:amrhas82/agentic-kit",
      "description": "Standard variant (13 agents, 8 skills)"
    },
    {
      "name": "agentic-kit-lite",
      "source": "github:amrhas82/agentic-kit",
      "description": "Lite variant (3 agents)"
    },
    {
      "name": "agentic-kit-pro",
      "source": "github:amrhas82/agentic-kit",
      "description": "Pro variant (13 agents, 14 skills)"
    }
  ]
}
```

Users install via:
```
/plugin marketplace add github:amrhas82/agentic-kit
```

### Option 3: Submit to Community Marketplaces

**claudecodecommands.directory** (Largest Community Marketplace)

1. Visit: https://claudecodecommands.directory/submit
2. Fill out submission form
3. Wait for review (1-3 days)
4. Users can then search and install

---

## Version Management

### Using UPDATE_VERSION.sh (Recommended)

Automatically updates version across all files:

```bash
./UPDATE_VERSION.sh 1.2.0
```

This updates:
- `package.json`
- All 4 plugin manifest files in `.claude-plugin/`

### Manual Version Update

```bash
# Update version
npm version patch  # 1.1.0 -> 1.1.1 (bug fixes)
npm version minor  # 1.1.0 -> 1.2.0 (new features)
npm version major  # 1.1.0 -> 2.0.0 (breaking changes)
```

Then manually update manifest files:
- `.claude-plugin/plugin.json`
- `.claude-plugin/plugin-lite.json`
- `.claude-plugin/plugin-standard.json`
- `.claude-plugin/plugin-pro.json`

### Complete Release Process

```bash
# 1. Update version
./UPDATE_VERSION.sh 1.2.0

# 2. Update CHANGELOG.md
# Add release notes for this version

# 3. Commit changes
git add .
git commit -m "Bump version to 1.2.0"
git tag v1.2.0
git push origin main --tags

# 4. Publish to both registries
npm run publish:both

# 5. Verify
# - Check npm.js: https://www.npmjs.com/package/@amrhas82/agentic-kit
# - Check GitHub: https://github.com/amrhas82/agentic-kit/packages
```

---

## Troubleshooting

### npm.js Issues

#### Error: 403 Forbidden - Package name taken
```
npm error 403 You do not have permission to publish
```

**Solution:** Use scoped package name: `@username/package-name`

#### Error: 402 Payment Required
```
npm error 402 You must sign up for private packages
```

**Solution:** Add `--access public` flag:
```bash
npm publish --access public
```

#### Error: Not logged in
```
npm error need auth
```

**Solution:**
```bash
npm login
```

### GitHub Packages Issues

#### Error: 401 Unauthorized

**Cause:** `GITHUB_TOKEN` not set or incorrect

**Solution:**
```bash
# Check if set
echo $GITHUB_TOKEN

# Set it
export GITHUB_TOKEN=ghp_your_token_here
```

#### Error: 403 Forbidden

**Cause:** Token missing `write:packages` scope

**Solution:**
1. Go to https://github.com/settings/tokens
2. Generate new token with `write:packages` scope

#### Error: 404 Not Found

**Cause:** Repository doesn't exist or name mismatch

**Solution:**
- Verify: https://github.com/amrhas82/agentic-kit
- Check package.json has `@amrhas82/agentic-kit`

#### Package Not Showing Up

**Solution:**
- Wait 5-10 minutes (propagation delay)
- Check GitHub repo → Packages tab
- Verify publish succeeded without errors

### General Issues

#### Validation Fails

**Problem:** `npm run validate` reports errors

**Solutions:**
- Check manifest files have correct agent/skill counts
- Ensure all agent files exist in `agents/` directory
- Verify all skill directories exist in `skills/`
- Check cli.js has shebang and is executable

#### GitHub Install Not Working

**Problem:** Users can't install via `/plugin add github:amrhas82/agentic-kit`

**Checklist:**
- [ ] Repository is public
- [ ] `.claude-plugin/` directory exists
- [ ] Manifests are valid JSON
- [ ] All files are pushed to GitHub

---

## Distribution Checklist

Before publishing a new release:

- [ ] All tests pass
- [ ] `npm run validate` succeeds
- [ ] Version bumped (via `UPDATE_VERSION.sh`)
- [ ] CHANGELOG.md updated
- [ ] README.md reflects current features
- [ ] All changes committed to git
- [ ] Git tag created (`v1.x.x`)
- [ ] Changes pushed to GitHub with tags
- [ ] Published to npm.js: `npm run publish:npm`
- [ ] Published to GitHub Packages: `npm run publish:github`
- [ ] Verified npm.js installation: `npx @amrhas82/agentic-kit --help`
- [ ] Verified GitHub Packages shows package
- [ ] Verified GitHub installation: `/plugin add github:amrhas82/agentic-kit`

---

## Package URLs

After publishing, your package will be available at:

- **npm.js:** https://www.npmjs.com/package/@amrhas82/agentic-kit
- **GitHub Packages:** https://github.com/amrhas82/agentic-kit/packages
- **GitHub Repository:** https://github.com/amrhas82/agentic-kit

## Support & Resources

- **npm Documentation:** https://docs.npmjs.com/cli/v10/commands/npm-publish
- **GitHub Packages Docs:** https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
- **Claude Code Plugin Docs:** https://docs.claude.com/en/docs/claude-code/plugin-marketplaces
- **First-Time GitHub Setup:** [GITHUB_SETUP.md](GITHUB_SETUP.md)
- **Using `pass` Password Manager:** [PASS_INTEGRATION.md](PASS_INTEGRATION.md)

---

**Last Updated:** November 2025
