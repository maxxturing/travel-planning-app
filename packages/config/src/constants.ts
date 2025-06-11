export const MAX_TRIP_NAME_LENGTH = 100
export const MAX_DESCRIPTION_LENGTH = 500
export const MAX_PACKING_ITEM_NAME_LENGTH = 50
export const MIN_TRIP_DURATION_DAYS = 1
export const MAX_TRIP_DURATION_DAYS = 365

export const DATABASE_NAME = 'travel-planning.db'

export const PACKING_CATEGORIES = [
  'Clothing',
  'Electronics',
  'Toiletries',
  'Documents',
  'Medications',
  'Entertainment',
  'Accessories',
  'Food & Snacks',
  'Other',
] as const

export const DEFAULT_PACKING_LISTS = [
  'Essentials',
  'Clothing',
  'Electronics',
] as const

export const ROUTES = {
  HOME: '/',
  TRIPS: '/trips',
  TRIP_DETAILS: '/trips/[id]',
  CREATE_TRIP: '/trips/create',
  EDIT_TRIP: '/trips/[id]/edit',
  PACKING_LIST: '/trips/[id]/packing/[listId]',
} as const