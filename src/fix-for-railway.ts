// fix-for-render.ts - Утилита для получения базового URL
export function getBaseUrl(): string {
  // Проверяем Railway переменные
  if (process.env.RAILWAY_STATIC_URL) {
    return `https://${process.env.RAILWAY_STATIC_URL}`;
  }
  
  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`;
  }
  
  // Для локальной разработки
  return process.env.NODE_ENV === 'production' 
    ? 'https://cash-healer-bot-production.up.railway.app'
    : 'http://localhost:3000';
}
