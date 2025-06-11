import { eq } from 'drizzle-orm'
import { db } from './client'
import { trips, packingLists, packingItems, type Trip, type NewTrip, type PackingList, type NewPackingList, type PackingItem, type NewPackingItem } from './schema'

// Trip queries
export const getAllTrips = () => db.select().from(trips)
export const getTripById = (id: string) => db.select().from(trips).where(eq(trips.id, id))
export const createTrip = (trip: NewTrip) => db.insert(trips).values(trip)
export const updateTrip = (id: string, trip: Partial<NewTrip>) => db.update(trips).set(trip).where(eq(trips.id, id))
export const deleteTrip = (id: string) => db.delete(trips).where(eq(trips.id, id))

// PackingList queries  
export const getPackingListsByTripId = (tripId: string) => db.select().from(packingLists).where(eq(packingLists.tripId, tripId))
export const createPackingList = (packingList: NewPackingList) => db.insert(packingLists).values(packingList)
export const deletePackingList = (id: string) => db.delete(packingLists).where(eq(packingLists.id, id))

// PackingItem queries
export const getPackingItemsByListId = (packingListId: string) => db.select().from(packingItems).where(eq(packingItems.packingListId, packingListId))
export const createPackingItem = (item: NewPackingItem) => db.insert(packingItems).values(item)
export const updatePackingItem = (id: string, item: Partial<NewPackingItem>) => db.update(packingItems).set(item).where(eq(packingItems.id, id))
export const deletePackingItem = (id: string) => db.delete(packingItems).where(eq(packingItems.id, id))