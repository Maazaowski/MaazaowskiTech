import type { DefaultSession } from "@auth/core/types"

declare module "@auth/core/types" {
  interface User {
    role?: 'admin' | 'moderator'
  }
  
  interface Session {
    user?: User & DefaultSession["user"]
  }
}
