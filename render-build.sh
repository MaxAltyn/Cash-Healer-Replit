#!/bin/bash
# render-build.sh
echo "=== Starting Render build process ==="

# Install dependencies
npm install

# Build the project
echo "Building with mastra..."
npm run build

# Check if build succeeded
if [ -f "dist/index.mjs" ]; then
    echo "✅ Build successful! dist/index.mjs exists."
    ls -la dist/
else
    echo "❌ Build failed! dist/index.mjs not found."
    echo "Checking for errors..."
    exit 1
fi

echo "=== Build complete ==="