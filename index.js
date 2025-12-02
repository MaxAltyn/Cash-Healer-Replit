// index.js - Стартовый файл для Railway (CommonJS)
console.log('🚀 Starting Cash Healer Bot...');

// Загружаем .env файл если есть
require('dotenv').config();

// Проверяем обязательные переменные
const requiredVars = ['TELEGRAM_BOT_TOKEN', 'PORT'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`❌ Отсутствуют обязательные переменные: ${missingVars.join(', ')}`);
  process.exit(1);
}

// Динамически импортируем ES модуль
import('./dist/index.mjs').catch(error => {
  console.error('❌ Ошибка при импорте ES модуля:', error);
  process.exit(1);
});
