// index.js - главный файл для Render
console.log('🚀 Starting Cash Healer Bot...');

// Проверяем сборку
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');

// Если есть dist/index.mjs - запускаем его
if (fs.existsSync(path.join(distPath, 'index.mjs'))) {
  console.log('✅ Found dist/index.mjs');
  require('child_process').spawn('node', ['dist/index.mjs'], {
    stdio: 'inherit',
    shell: true
  });
} 
// Если есть dist/index.js - запускаем его
else if (fs.existsSync(path.join(distPath, 'index.js'))) {
  console.log('✅ Found dist/index.js');
  require('child_process').spawn('node', ['dist/index.js'], {
    stdio: 'inherit',
    shell: true
  });
}
// Если нет dist - создаем простой сервер
else {
  console.log('⚠️ No dist folder, starting fallback server');
  
  const express = require('express');
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.get('/', (req, res) => {
    res.json({
      status: 'Cash Healer Bot - Fallback',
      time: new Date().toISOString(),
      message: 'Application is building...'
    });
  });
  
  app.listen(PORT, () => {
    console.log(`✅ Fallback server on port ${PORT}`);
  });
}