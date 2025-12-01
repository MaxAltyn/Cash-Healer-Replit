#!/bin/bash
echo "=== Starting Cash Healer Bot ==="
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Current directory: $(pwd)"
echo "Files in dist/:"
ls -la dist/ 2>/dev/null || echo "dist/ directory not found"

# Check if build was successful
if [ -f "dist/index.mjs" ]; then
    echo "✅ Found dist/index.mjs, starting with ESM..."
    node dist/index.mjs
elif [ -f "dist/index.js" ]; then
    echo "⚠️ Found dist/index.js instead of .mjs"
    node dist/index.js
else
    echo "❌ No index file found in dist/"
    echo "Running build..."
    npm run build
    
    if [ -f "dist/index.mjs" ]; then
        echo "✅ Build successful, starting..."
        node dist/index.mjs
    else
        echo "❌ Build failed, starting fallback server..."
        node fallback-server.js
    fi
fi