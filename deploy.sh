#!/bin/bash

echo "🚀 Starting automatic Netlify deployment..."

# Build the project
echo "📦 Building React app..."
cd client
npm run build
cd ..

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
npx netlify deploy --dir=client/build --prod --message "Auto deployment from CLI"

echo "✅ Deployment completed!"
echo "🎉 Your portfolio should be live at: https://resumewebiste.netlify.app" 