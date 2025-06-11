import { UIProvider } from '@travel-planning/ui'
import { AppProvider } from '@travel-planning/app'
import { TripListScreen } from '@travel-planning/app'

export default function App() {
  return (
    <UIProvider>
      <AppProvider>
        <TripListScreen />
      </AppProvider>
    </UIProvider>
  )
}