# Dual Publishing Setup Complete ✅

Your Agentic Kit package is now configured to publish to **both npm.js and GitHub Packages** with every update!

---

## ✅ What Was Configured

### 1. Package Configuration (`package.json`)
- Default registry set to npm.js (easier for users)
- Added publishing scripts:
  - `npm run publish:npm` - Publish to npm.js only
  - `npm run publish:github` - Publish to GitHub Packages only
  - `npm run publish:both` - **Publish to BOTH** (recommended)

### 2. Authentication (`.npmrc`)
- GitHub Packages authentication ready
- Uses `GITHUB_TOKEN` environment variable

### 3. Publishing Script (`publish.sh`)
- Automated script that validates and publishes to both registries
- Handles missing GitHub token gracefully

### 4. Documentation
- **`docs/PUBLISHING.md`** - Complete merged guide for all publishing
- **`docs/GITHUB_SETUP.md`** - First-time GitHub Packages setup
- **Deleted:** `docs/GITHUB_PACKAGES.md` (merged into PUBLISHING.md)

---

## 🚀 Quick Start - Publish to Both Registries

### First Time Only: Setup GitHub Packages

1. **Create GitHub Token:**
   - Visit: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes: `write:packages`, `read:packages`
   - Copy token (starts with `ghp_`)

2. **Set Environment Variable:**
   ```bash
   export GITHUB_TOKEN=ghp_your_token_here

   # Make it permanent (add to ~/.bashrc or ~/.zshrc)
   echo 'export GITHUB_TOKEN=ghp_your_token_here' >> ~/.bashrc
   source ~/.bashrc
   ```

3. **Verify:**
   ```bash
   echo $GITHUB_TOKEN  # Should show your token
   ```

**See full setup guide:** [`docs/GITHUB_SETUP.md`](docs/GITHUB_SETUP.md)

---

## 📦 Publishing Workflow

### Option 1: Use the Script (Easiest)

```bash
cd /home/hamr/PycharmProjects/agentic-kit
./publish.sh
```

### Option 2: Use npm Scripts

```bash
# Publish to both registries
npm run publish:both

# Or publish individually
npm run publish:npm      # npm.js only
npm run publish:github   # GitHub Packages only
```

### Complete Release Process

```bash
# 1. Update version
./UPDATE_VERSION.sh 1.2.0

# 2. Update CHANGELOG.md
# (Add your release notes)

# 3. Commit and tag
git add .
git commit -m "Bump version to 1.2.0"
git tag v1.2.0
git push origin main --tags

# 4. Publish to both registries
npm run publish:both

# 5. Verify
# - npm.js: https://www.npmjs.com/package/@amrhas82/agentic-kit
# - GitHub: https://github.com/amrhas82/agentic-kit/packages
```

---

## 📋 Files Modified/Created

### Modified:
- ✅ `package.json` - Added publish scripts, set npm.js as default
- ✅ `.npmrc` - GitHub Packages authentication
- ✅ `docs/PUBLISHING.md` - Merged and updated complete guide

### Created:
- ✅ `publish.sh` - Automated dual publishing script
- ✅ `docs/GITHUB_SETUP.md` - First-time setup guide
- ✅ `.gitignore` - Prevents committing sensitive/backup files

### Deleted:
- ✅ `docs/GITHUB_PACKAGES.md` - Merged into PUBLISHING.md

---

## 🔍 Verification After Publishing

### npm.js
- **Page:** https://www.npmjs.com/package/@amrhas82/agentic-kit
- **Test:** `npx @amrhas82/agentic-kit --help`

### GitHub Packages
- **Page:** https://github.com/amrhas82/agentic-kit (click "Packages" on right)
- **Direct:** https://github.com/amrhas82/agentic-kit/packages

---

## ❓ Common Questions

### Q: Do I need to publish to both every time?
**A:** Yes, each registry is separate. Use `npm run publish:both` to publish everywhere with one command.

### Q: What if I only want to publish to npm.js?
**A:** Just use `npm run publish:npm` or regular `npm publish --access public`

### Q: What if my GitHub token expires?
**A:** Generate a new token at https://github.com/settings/tokens and update your `GITHUB_TOKEN` variable.

### Q: Can users install from either registry?
**A:** Yes! npm.js is easier (no token required). GitHub Packages requires users to set up `.npmrc` with their own GitHub token.

---

## 📚 Full Documentation

- **Publishing Guide:** [`docs/PUBLISHING.md`](PUBLISHING.md)
- **GitHub Setup:** [`docs/GITHUB_SETUP.md`](docs/GITHUB_SETUP.md)
- **Version Management:** Use `./UPDATE_VERSION.sh`

---

## 🎯 Next Steps

1. **Setup GitHub Token** (if not done yet)
   - Follow: [`docs/GITHUB_SETUP.md`](docs/GITHUB_SETUP.md)

2. **Test Publishing**
   ```bash
   npm run publish:both
   ```

3. **Verify Both Registries**
   - Check npm.js and GitHub Packages pages

---

**You're all set! 🎉**

Every time you want to publish an update, just run:
```bash
npm run publish:both
```
