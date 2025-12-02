// railway.js - специальный стартовый файл для Railway
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  // Загружаем скомпилированный файл
  const modulePath = join(__dirname, 'dist', 'index.mjs');
  console.log(`🚀 Загружаем модуль: ${modulePath}`);
  
  const module = await import(modulePath);
  console.log('✅ Модуль успешно загружен');
  
  // Экспортируем mastra для Railway
  export const mastra = module.mastra;
  
} catch (error) {
  console.error('❌ Ошибка при загрузке модуля:', error);
  process.exit(1);
}