// server.js - Основной стартовый файл для Railway (CommonJS)
require('dotenv').config();

console.log('🚀 Starting Cash Healer Bot...');

// Проверяем обязательные переменные
const requiredVars = ['TELEGRAM_BOT_TOKEN'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`❌ Отсутствуют обязательные переменные: ${missingVars.join(', ')}`);
  process.exit(1);
}

// Для ES модулей используем динамический импорт
(async () => {
  try {
    // Импортируем скомпилированный ES модуль
    const module = await import('./dist/index.mjs');
    console.log('✅ ES модуль успешно загружен');
    
    // Экспортируем mastra для Railway healthcheck
    module.mastra.server.start().then(() => {
      console.log('✅ Mastra сервер запущен');
    });
    
  } catch (error) {
    console.error('❌ Ошибка при загрузке ES модуля:', error);
    process.exit(1);
  }
})();