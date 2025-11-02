# Publishing to GitHub Packages

This guide shows how to publish `@amrhas82/agentic-kit` to GitHub Packages npm registry.

## Prerequisites

- GitHub account with access to `amrhas82/agentic-kit` repository
- npm installed locally
- Git repository already pushed to GitHub

## Setup Steps

### 1. Create GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Direct link: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Configure token:
   - **Note**: `Publish agentic-kit to GitHub Packages`
   - **Expiration**: Choose your preference (90 days recommended)
   - **Scopes**: Select these permissions:
     - ✅ `write:packages` - Upload packages to GitHub Package Registry
     - ✅ `read:packages` - Download packages from GitHub Package Registry
     - ✅ `delete:packages` - Delete packages from GitHub Package Registry (optional)
4. Click **"Generate token"**
5. **IMPORTANT**: Copy the token immediately (you won't see it again)

### 2. Configure Authentication

Set your GitHub token as an environment variable:

```bash
# On Linux/macOS (add to ~/.bashrc or ~/.zshrc for persistence)
export GITHUB_TOKEN=ghp_your_token_here

# On Windows (Command Prompt)
set GITHUB_TOKEN=ghp_your_token_here

# On Windows (PowerShell)
$env:GITHUB_TOKEN="ghp_your_token_here"
```

**Verify it's set:**
```bash
echo $GITHUB_TOKEN    # Linux/macOS
echo %GITHUB_TOKEN%   # Windows CMD
echo $env:GITHUB_TOKEN  # Windows PowerShell
```

### 3. Publish to GitHub Packages

```bash
cd /home/hamr/PycharmProjects/agentic-kit

# Ensure you're on the right version
npm version  # Should show 1.1.0

# Publish to GitHub Packages
npm publish
```

### 4. Verify Publication

1. Go to your GitHub repository: https://github.com/amrhas82/agentic-kit
2. Click on **"Packages"** on the right sidebar
3. You should see `@amrhas82/agentic-kit` listed

## Installing from GitHub Packages

Users can install your package from GitHub Packages:

### For Users

Create `.npmrc` in their project or home directory:

```
@amrhas82:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=THEIR_GITHUB_TOKEN
```

Then install:
```bash
npm install @amrhas82/agentic-kit
```

## Publishing to Both Registries

You can publish to **both** npm registry AND GitHub Packages:

### Option 1: Publish to npm.js (public registry)

```bash
# Remove or comment out publishConfig in package.json
# Then publish
npm publish --registry https://registry.npmjs.org --access public
```

### Option 2: Publish to GitHub Packages

```bash
# Keep publishConfig in package.json pointing to GitHub
npm publish
```

### Option 3: Publish to Both (Recommended)

```bash
# 1. Publish to npm.js first
npm publish --registry https://registry.npmjs.org --access public

# 2. Then publish to GitHub Packages
npm publish --registry https://npm.pkg.github.com
```

## Updating Package.json for Dual Publishing

If you want to make npm.js the default and GitHub Packages optional:

**package.json:**
```json
{
  "name": "@amrhas82/agentic-kit",
  "version": "1.1.0",
  "publishConfig": {
    "registry": "https://registry.npmjs.org",
    "access": "public"
  }
}
```

Then to publish to GitHub Packages specifically:
```bash
npm publish --registry https://npm.pkg.github.com
```

## Current Configuration

Your package is currently configured to publish to **GitHub Packages by default**.

**package.json** has:
```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```

**.npmrc** contains:
```
@amrhas82:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Troubleshooting

### Error: 401 Unauthorized

- Verify your `GITHUB_TOKEN` is set correctly
- Ensure token has `write:packages` scope
- Check token hasn't expired

### Error: 404 Not Found

- Verify repository exists: https://github.com/amrhas82/agentic-kit
- Ensure package name matches repository owner: `@amrhas82/agentic-kit`

### Error: 403 Forbidden

- Verify you have write access to the repository
- Check repository visibility settings (public/private)

### Package Not Showing Up

- Wait a few minutes (can take 5-10 minutes)
- Check GitHub repository → Packages tab
- Verify publish command succeeded without errors

## Links

- **GitHub Packages Documentation**: https://docs.github.com/en/packages
- **npm Registry Documentation**: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
- **Package URL (after publishing)**: https://github.com/amrhas82/agentic-kit/packages
