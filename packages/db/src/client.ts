// Database client temporarily disabled for Task 1 Vercel deployment
// Will be replaced with Turso (LibSQL) in Task 3

// Placeholder exports for type compatibility
export const db = null as any
export { trips, packingLists, packingItems } from './schema'
export function runMigrations() {
  console.log('Database migrations will be implemented in Task 3 with Turso')
}

// Task 3 implementation will use:
// import { createClient } from '@libsql/client'
// import { drizzle } from 'drizzle-orm/libsql'