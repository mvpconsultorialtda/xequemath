export { auth as middleware } from './auth';

export const config = {
  matcher: ['/assistente', '/campanhas/criar'],
};

export const runtime = "nodejs";
