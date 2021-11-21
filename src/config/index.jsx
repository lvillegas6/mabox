export const config = {
    dev: process.env.NODE_ENV === 'development',
    api: import.meta.env.VITE_URL_BACKEND || 'localhost:8081'
  };
  