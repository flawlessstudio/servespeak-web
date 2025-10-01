#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Starting ServeSpeak-Web Netlify Deployment Script..."

# 1. Install dependencies
echo "Installing dependencies..."
npm install

# 2. Build the client application (This step should include the PWA build)
echo "Building client application and PWA assets..."
npm run build

# 3. (Optional) Ensure backend is running/reachable if deployed to a separate service,
#    or ensure Netlify Functions (if used) are ready.
echo "Backend configuration check skipped for basic Netlify deploy..."

# 4. Success message for the Netlify build environment
echo "✅ Build completed successfully. Netlify will now deploy the 'dist' directory."

# Note: Netlify deployment typically automatically picks up the 'build' command
# from package.json and deploys the folder specified in netlify.toml (default 'dist').
# This script mainly ensures all build steps are executed correctly.
