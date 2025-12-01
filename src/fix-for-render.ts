// src/fix-for-render.ts
export function getBaseUrl(): string {
  // 1. Render
  if (process.env.RENDER_EXTERNAL_HOSTNAME) {
    return `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;
  }
  
  // 2. Local development
  return `http://localhost:${process.env.PORT || 3000}`;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production' || !!process.env.RENDER;
}