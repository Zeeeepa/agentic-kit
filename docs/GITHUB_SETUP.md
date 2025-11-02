# GitHub Packages - First Time Setup

Follow these steps ONE TIME to enable publishing to GitHub Packages.

## Step 1: Create GitHub Personal Access Token

1. **Open GitHub Settings:**
   - Go to: https://github.com/settings/tokens
   - Or: GitHub → Settings (top right) → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token:**
   - Click **"Generate new token"** button
   - Select **"Generate new token (classic)"**

3. **Configure Token:**
   - **Note:** `Publish agentic-kit to GitHub Packages`
   - **Expiration:** Select `90 days` (or your preference)
   - **Select scopes:** ✅ Check these boxes:
     - ✅ `write:packages` - Upload packages to GitHub Package Registry
     - ✅ `read:packages` - Download packages from GitHub Package Registry
     - ✅ `delete:packages` - Delete packages (optional, but recommended)

4. **Generate and Copy:**
   - Click **"Generate token"** at the bottom
   - **IMPORTANT:** Copy the token immediately (starts with `ghp_`)
   - You won't be able to see it again!

## Step 2: Set Environment Variable

Add the token to your shell environment:

### On Linux/macOS:

**Temporary (current session only):**
```bash
export GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE
```

**Permanent (add to shell config):**
```bash
# For bash users (add to ~/.bashrc)
echo 'export GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE' >> ~/.bashrc
source ~/.bashrc

# For zsh users (add to ~/.zshrc)
echo 'export GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE' >> ~/.zshrc
source ~/.zshrc
```

### On Windows:

**Command Prompt:**
```cmd
set GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE
```

**PowerShell:**
```powershell
$env:GITHUB_TOKEN="ghp_YOUR_TOKEN_HERE"
```

**Permanent (Windows):**
1. Search for "Environment Variables" in Start Menu
2. Click "Edit the system environment variables"
3. Click "Environment Variables" button
4. Under "User variables", click "New"
5. Variable name: `GITHUB_TOKEN`
6. Variable value: `ghp_YOUR_TOKEN_HERE`
7. Click OK to save

## Step 3: Verify Setup

Check that the token is set correctly:

```bash
# Linux/macOS
echo $GITHUB_TOKEN

# Windows CMD
echo %GITHUB_TOKEN%

# Windows PowerShell
echo $env:GITHUB_TOKEN
```

You should see your token starting with `ghp_`

## Step 4: Test Publishing

Now you're ready! Try publishing:

```bash
cd /home/hamr/PycharmProjects/agentic-kit

# Publish to both registries
npm run publish:both

# Or just GitHub Packages
npm run publish:github
```

## Verification

After publishing to GitHub Packages:

1. Go to: https://github.com/amrhas82/agentic-kit
2. Look for **"Packages"** on the right sidebar
3. You should see `@amrhas82/agentic-kit` listed

## Troubleshooting

### Error: 401 Unauthorized

**Cause:** Token not set or incorrect

**Fix:**
```bash
# Verify token is set
echo $GITHUB_TOKEN

# If empty, set it again
export GITHUB_TOKEN=ghp_YOUR_TOKEN_HERE
```

### Error: 403 Forbidden

**Cause:** Token doesn't have correct permissions

**Fix:**
1. Go back to https://github.com/settings/tokens
2. Find your token and click it
3. Ensure `write:packages` is checked
4. If not, create a new token with correct permissions

### Error: 404 Not Found

**Cause:** Repository doesn't exist or name mismatch

**Fix:**
- Verify repository exists: https://github.com/amrhas82/agentic-kit
- Check package.json has correct name: `@amrhas82/agentic-kit`

### Token Expired

**When:** After 90 days (or your chosen expiration)

**Fix:**
1. Go to https://github.com/settings/tokens
2. Generate a new token (same process as Step 1)
3. Update your environment variable with new token

---

**That's it!** Once set up, you can publish to both registries with one command:

```bash
npm run publish:both
```
