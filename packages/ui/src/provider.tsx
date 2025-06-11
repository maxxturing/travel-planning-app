import { TamaguiProvider, TamaguiProviderProps } from '@tamagui/core'
import { ToastProvider } from '@tamagui/toast'
import config from '@travel-planning/config/src/tamagui.config'

export function UIProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} {...rest}>
      <ToastProvider>
        {children}
      </ToastProvider>
    </TamaguiProvider>
  )
}