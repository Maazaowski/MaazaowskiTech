import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/client';

export const onRequest = defineMiddleware(async (context, next) => {
  const session = await getSession(context.request);
  
  // Protect admin routes
  if (context.url.pathname.startsWith('/admin')) {
    if (!session || session.user?.role !== 'admin') {
      return context.redirect('/auth/signin');
    }
  }
  
  return next();
});