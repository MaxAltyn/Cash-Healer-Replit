// fallback-server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: 'Cash Healer Bot - Fallback Server',
    time: new Date().toISOString(),
    message: 'Build in progress or failed'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Fallback server running on port ${PORT}`);
});