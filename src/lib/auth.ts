import { defineConfig } from 'auth-astro';
import GitHub from '@auth/core/providers/github';

export const authConfig = defineConfig({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow specific GitHub users to access admin
      const allowedUsers = ['Maazaowski'];
      return allowedUsers.includes(profile.login);
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = 'admin';
      }
      return session;
    },
  },
});