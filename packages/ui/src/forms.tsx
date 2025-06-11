import { YStack, XStack } from '@tamagui/core'
import { ReactNode } from 'react'
import { Button } from './button'

export interface FormProps {
  children: ReactNode
  onSubmit: () => void
  onCancel?: () => void
  submitLabel?: string
  cancelLabel?: string
  isSubmitting?: boolean
}

export function Form({ 
  children, 
  onSubmit, 
  onCancel, 
  submitLabel = 'Save', 
  cancelLabel = 'Cancel',
  isSubmitting = false 
}: FormProps) {
  return (
    <YStack space="$4" flex={1}>
      <YStack space="$3" flex={1}>
        {children}
      </YStack>
      
      <XStack space="$3" justifyContent="flex-end">
        {onCancel && (
          <Button variant="ghost" onPress={onCancel} disabled={isSubmitting}>
            {cancelLabel}
          </Button>
        )}
        <Button onPress={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : submitLabel}
        </Button>
      </XStack>
    </YStack>
  )
}