export interface AppError {
  message: string
  code: string
  details?: any
}

export interface ValidationError extends AppError {
  field: string
  code: 'VALIDATION_ERROR'
}

export interface NetworkError extends AppError {
  code: 'NETWORK_ERROR'
  status?: number
}

export interface DatabaseError extends AppError {
  code: 'DATABASE_ERROR'
  operation?: string
}

export type TravelAppError = ValidationError | NetworkError | DatabaseError

export interface PackingProgress {
  total: number
  packed: number
  percentage: number
}

export interface TripFormData {
  name: string
  destination: string
  startDate: string
  endDate: string
  description?: string
}

export interface PackingListFormData {
  name: string
  tripId: string
}

export interface PackingItemFormData {
  name: string
  description?: string
  category?: string
  packingListId: string
}