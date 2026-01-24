# Using `pass` with Agentic Kit Publishing

This guide shows how to use the `pass` password manager to securely store and retrieve your GitHub token for publishing.

---

## What is `pass`?

`pass` is a simple, secure command-line password manager that stores passwords in encrypted files using GPG.

**Install pass:**
```bash
# Ubuntu/Debian
sudo apt install pass

# macOS
brew install pass

# Arch Linux
sudo pacman -S pass
```

---

## Setup (One Time)

### Step 1: Initialize pass (if not already done)

```bash
# Generate GPG key if you don't have one
gpg --full-generate-key

# Initialize pass with your GPG key
pass init your-gpg-key-id
```

### Step 2: Store GitHub Token in pass

```bash
# This will prompt you to enter your token
pass insert amr/github

# Or insert it directly
echo "ghp_your_token_here" | pass insert -e amr/github
```

### Step 3: Verify

```bash
# Retrieve the token (should show your token)
pass show amr/github
```

---

## Using with Publishing Scripts

### Option 1: Automatic (Recommended)

The `publish.sh` script now **automatically checks for `pass`** and retrieves the token:

```bash
./publish.sh
```

If `GITHUB_TOKEN` is not set, the script will:
1. Check if `pass` is installed
2. Try to retrieve token from `amr/github`
3. Use it automatically

**No manual export needed!**

### Option 2: Manual Export (Temporary)

Set the token for your current shell session:

```bash
export GITHUB_TOKEN=$(pass show amr/github)
npm run publish:both
```

### Option 3: Helper Script

Use the helper script:

```bash
# Source it to set the token in your current shell
source ./set-github-token.sh

# Then publish
npm run publish:both
```

### Option 4: Permanent Shell Integration

Add to your `~/.bashrc` or `~/.zshrc`:

```bash
# Add this line to make it available in all shells
export GITHUB_TOKEN=$(pass show amr/github)
```

Then reload:
```bash
source ~/.bashrc  # or source ~/.zshrc
```

---

## Publishing Workflow with `pass`

### Simple Workflow (Automatic)

```bash
cd /home/hamr/PycharmProjects/liteagents

# The script automatically retrieves from pass
./publish.sh
```

### Manual Workflow

```bash
# 1. Set token from pass
export GITHUB_TOKEN=$(pass show amr/github)

# 2. Verify it's set
echo $GITHUB_TOKEN | cut -c1-10  # Shows first 10 chars

# 3. Publish
npm run publish:both
```

### Complete Release with `pass`

```bash
# Set token
export GITHUB_TOKEN=$(pass show amr/github)

# Update version
./UPDATE_VERSION.sh 1.2.0

# Update CHANGELOG.md
# (edit with your changes)

# Commit and tag
git add .
git commit -m "Bump version to 1.2.0"
git tag v1.2.0
git push origin main --tags

# Publish to both registries
npm run publish:both
```

---

## Advantages of Using `pass`

✅ **Secure:** Tokens encrypted with GPG
✅ **No plain text:** Token never stored in shell history or config files
✅ **Git-friendly:** Can version control password store
✅ **Centralized:** One place for all your secrets
✅ **Automatic retrieval:** Scripts can fetch it automatically

---

## Troubleshooting

### Error: "pass: command not found"

**Solution:** Install pass
```bash
sudo apt install pass  # Ubuntu/Debian
brew install pass      # macOS
```

### Error: "amr/github is not in the password store"

**Solution:** Store your token first
```bash
pass insert amr/github
# Then enter your token when prompted
```

### Error: "gpg: decryption failed: No secret key"

**Solution:** Your GPG key is not available

```bash
# List your GPG keys
gpg --list-secret-keys

# If none exist, generate one
gpg --full-generate-key

# Re-initialize pass with your key ID
pass init YOUR_KEY_ID
```

### Token Not Working

**Verify token is correct:**
```bash
# Show token
pass show amr/github

# Check it starts with ghp_
pass show amr/github | head -c 4
# Should output: ghp_
```

**Verify token has correct permissions:**
- Go to: https://github.com/settings/tokens
- Find your token
- Ensure `write:packages` and `read:packages` are checked

### Using Different pass Path

If you stored your token at a different location:

**Update `publish.sh`:**
```bash
# Change this line (around line 19):
export GITHUB_TOKEN=$(pass show amr/github)

# To your path:
export GITHUB_TOKEN=$(pass show your/custom/path)
```

**Update `set-github-token.sh`:**
```bash
# Change this line (around line 20):
TOKEN=$(pass show amr/github)

# To your path:
TOKEN=$(pass show your/custom/path)
```

---

## Security Best Practices

### ✅ DO:
- Use `pass` to store tokens
- Set short expiration (90 days) on GitHub tokens
- Use minimal scopes (`write:packages`, `read:packages` only)
- Keep GPG keys secure

### ❌ DON'T:
- Store tokens in plain text files
- Commit tokens to git
- Share your GPG private key
- Use tokens with excessive permissions

---

## Alternative: Using Environment Variable

If you don't want to use `pass`, you can still set the token manually:

```bash
# Temporary (current session)
export GITHUB_TOKEN=ghp_your_token_here

# Permanent (add to ~/.bashrc)
echo 'export GITHUB_TOKEN=ghp_your_token_here' >> ~/.bashrc
source ~/.bashrc
```

**But `pass` is more secure!** ✅

---

## Quick Reference

```bash
# Store token in pass
pass insert amr/github

# Retrieve token
pass show amr/github

# Export for current session
export GITHUB_TOKEN=$(pass show amr/github)

# Verify it's set
echo $GITHUB_TOKEN | cut -c1-10

# Publish (automatic retrieval)
./publish.sh

# Publish (with manual export)
export GITHUB_TOKEN=$(pass show amr/github) && npm run publish:both
```

---

## Links

- **pass homepage:** https://www.passwordstore.org/
- **pass on GitHub:** https://github.com/zx2c4/password-store
- **GPG Guide:** https://www.gnupg.org/gph/en/manual.html

---

**Your token is now secure and easy to use!** 🔐
