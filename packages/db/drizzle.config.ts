import type { Config } from 'drizzle-kit'

// Drizzle config temporarily disabled for Task 1
// Will be updated for Turso (LibSQL) in Task 3
export default {
  schema: './src/schema.ts',
  out: './drizzle',
  // driver: 'turso', // Will be configured in Task 3
  // dbCredentials: {
  //   url: process.env.TURSO_DATABASE_URL!,
  //   authToken: process.env.TURSO_AUTH_TOKEN!,
  // },
} satisfies Partial<Config>