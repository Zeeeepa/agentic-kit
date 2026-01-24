#!/bin/bash
# Publish liteagents to npm

set -e  # Exit on error

echo "=========================================="
echo "Publishing liteagents"
echo "=========================================="
echo ""

# Check for NPM_TOKEN (optional - for 2FA bypass)
if [ -z "$NPM_TOKEN" ]; then
    if command -v pass &> /dev/null && pass show amr/npmjs_token &> /dev/null; then
        echo "🔑 Retrieving npm token from pass..."
        export NPM_TOKEN=$(pass show amr/npmjs_token | head -n1)
        echo "✓ npm token retrieved from pass (amr/npmjs_token)"
        npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN
    else
        echo "ℹ No NPM_TOKEN set (manual login may be required)"
    fi
else
    echo "✓ NPM_TOKEN is set"
    npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN
fi

echo ""
echo "Step 1: Validating package..."
if npm run validate; then
    echo "✓ Validation passed"
else
    echo "✗ Validation failed"
    exit 1
fi

# Get current version
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo ""
echo "Preparing to publish version: $PACKAGE_VERSION"

echo ""
echo "Step 2: Checking npm registry..."
if npm view liteagents@$PACKAGE_VERSION version &>/dev/null; then
    echo "ℹ Version $PACKAGE_VERSION already exists on npm"
    echo "  → https://www.npmjs.com/package/liteagents"
    echo ""
    echo "To publish a new version:"
    echo "  1. Update version: npm version patch (or minor/major)"
    echo "  2. Run: ./scripts/publish.sh"
    exit 0
fi

echo "Publishing to npm..."
if npm publish --access public; then
    echo ""
    echo "=========================================="
    echo "✓ PUBLISHED SUCCESSFULLY"
    echo "=========================================="
    echo ""
    echo "Package: liteagents"
    echo "Version: $PACKAGE_VERSION"
    echo "URL: https://www.npmjs.com/package/liteagents"
    echo ""
else
    echo ""
    echo "=========================================="
    echo "✗ PUBLISHING FAILED"
    echo "=========================================="
    exit 1
fi
