// Этот файл заменит все Replit-специфичные настройки
export function getBaseUrl(): string {
  // 1. Render
  if (process.env.RENDER_EXTERNAL_HOSTNAME) {
    return `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;
  }
  
  // 2. Railway
  if (process.env.RAILWAY_STATIC_URL) {
    return process.env.RAILWAY_STATIC_URL;
  }
  
  // 3. Fallback (для разработки)
  return `http://localhost:${process.env.PORT || 3000}`;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production' || !!process.env.RENDER || !!process.env.RAILWAY_ENVIRONMENT;
}