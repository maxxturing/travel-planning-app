import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const trips = sqliteTable('trips', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  destination: text('destination').notNull(),
  startDate: text('start_date').notNull(),
  endDate: text('end_date').notNull(),
  description: text('description'),
  createdAt: text('created_at').default(sql`(datetime('now'))`).notNull(),
})

export const packingLists = sqliteTable('packing_lists', {
  id: text('id').primaryKey(),
  tripId: text('trip_id').notNull().references(() => trips.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  createdAt: text('created_at').default(sql`(datetime('now'))`).notNull(),
})

export const packingItems = sqliteTable('packing_items', {
  id: text('id').primaryKey(),
  packingListId: text('packing_list_id').notNull().references(() => packingLists.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  isPacked: integer('is_packed', { mode: 'boolean' }).default(false).notNull(),
  category: text('category'),
})

export type Trip = typeof trips.$inferSelect
export type NewTrip = typeof trips.$inferInsert
export type PackingList = typeof packingLists.$inferSelect
export type NewPackingList = typeof packingLists.$inferInsert
export type PackingItem = typeof packingItems.$inferSelect
export type NewPackingItem = typeof packingItems.$inferInsert