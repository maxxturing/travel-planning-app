export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateRange(startDate: string | Date, endDate: string | Date): string {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

export function calculateTripDuration(startDate: string | Date, endDate: string | Date): number {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  const diffTime = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export function validateTripDates(startDate: string | Date, endDate: string | Date): string | null {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate
  
  if (start >= end) {
    return 'End date must be after start date'
  }
  
  if (start < new Date()) {
    return 'Start date cannot be in the past'
  }
  
  return null
}

export function calculatePackingProgress(totalItems: number, packedItems: number): number {
  if (totalItems === 0) return 0
  return Math.round((packedItems / totalItems) * 100)
}