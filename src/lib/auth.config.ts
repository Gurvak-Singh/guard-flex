import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { DefaultSession } from 'next-auth'

// Extend the built-in session types
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id?: string
      role?: string
    } & DefaultSession['user']
  }

  interface User {
    id: string
    role?: string
  }
}

// Extend JWT type
declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    role?: string
  }
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would validate the credentials
        // For example, check against your database
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
        // For demo purposes, we're using hardcoded values
        // In a real app, you would check against your database
        const mockUsers = [
          {
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'admin',
            password: 'password123',
          },
          {
            id: '2',
            name: 'Guard User',
            email: 'guard@example.com',
            role: 'guard',
            password: 'password123',
          },
          {
            id: '3',
            name: 'Employer User',
            email: 'employer@example.com',
            role: 'employer',
            password: 'password123',
          }
        ]

        const user = mockUsers.find(user => user.email === credentials.email)
        
        if (user && user.password === credentials.password) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          }
        }
        
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
}
