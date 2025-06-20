// Platform-agnostic navigation types and constants
export type RootStackParamList = {
  Home: undefined
  Trips: undefined
  TripDetails: { tripId: string }
  CreateTrip: undefined
  EditTrip: { tripId: string }
  PackingList: { tripId: string; packingListId: string }
  Settings: undefined
}

export const ROUTES = {
  HOME: 'Home' as const,
  TRIPS: 'Trips' as const,
  TRIP_DETAILS: 'TripDetails' as const,
  CREATE_TRIP: 'CreateTrip' as const,
  EDIT_TRIP: 'EditTrip' as const,
  PACKING_LIST: 'PackingList' as const,
  SETTINGS: 'Settings' as const,
}

// React Navigation Stack will be imported in platform-specific files
// For web: Use Next.js routing
// For mobile: Use React Navigation