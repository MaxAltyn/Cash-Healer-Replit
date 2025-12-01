// index.js - fallback for Render
console.log('🚀 Starting Cash Healer Bot...');

// Try to load the built mjs file
try {
  import('./dist/index.mjs');
} catch (error) {
  console.error('❌ Failed to load dist/index.mjs:', error.message);
  
  // Fallback to basic Express server for health checks
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.get('/', (req, res) => {
    res.json({
      status: 'Bot starting up',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  });
  
  app.listen(PORT, () => {
    console.log(`✅ Fallback server on port ${PORT}`);
  });
}