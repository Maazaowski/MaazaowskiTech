import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/server';

export const onRequest = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith('/admin')) {
    return next();
  }

  try {
    const session = await getSession(context.request);
    
    if (!session?.user) {
      return context.redirect('/auth/signin');
    }
    
    return next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return context.redirect('/auth/signin');
  }
});