import { ReactNode } from 'react'

// Simplified UI Provider for Task 1 
// Full Tamagui integration will be implemented in Task 2
export interface UIProviderProps {
  children: ReactNode
}

export function UIProvider({ children }: UIProviderProps) {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {children}
    </div>
  )
}