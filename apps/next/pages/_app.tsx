import { AppProps } from 'next/app'
import { AppProvider } from '@travel-planning/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}