import { AppProps } from 'next/app'
import { UIProvider } from '@travel-planning/ui'
import { AppProvider } from '@travel-planning/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </UIProvider>
  )
}