export const MAX_TRIP_NAME_LENGTH = 100
export const MAX_DESCRIPTION_LENGTH = 500
export const MAX_PACKING_ITEM_NAME_LENGTH = 50

export const DATABASE_NAME = 'travel-planning.db'

export const ROUTES = {
  HOME: '/',
  TRIPS: '/trips',
  TRIP_DETAILS: '/trips/[id]',
  CREATE_TRIP: '/trips/create',
  EDIT_TRIP: '/trips/[id]/edit',
  PACKING_LIST: '/trips/[id]/packing/[listId]',
} as const