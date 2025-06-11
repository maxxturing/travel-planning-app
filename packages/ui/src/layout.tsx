import { XStack, YStack, StackProps } from '@tamagui/core'
import { ReactNode } from 'react'

export interface ContainerProps extends StackProps {
  children: ReactNode
  centered?: boolean
}

export function Container({ children, centered, ...props }: ContainerProps) {
  return (
    <YStack
      flex={1}
      paddingHorizontal="$4"
      paddingVertical="$3"
      justifyContent={centered ? 'center' : 'flex-start'}
      alignItems={centered ? 'center' : 'stretch'}
      {...props}
    >
      {children}
    </YStack>
  )
}

export interface CardProps extends StackProps {
  children: ReactNode
}

export function Card({ children, ...props }: CardProps) {
  return (
    <YStack
      backgroundColor="$white1"
      borderRadius="$4"
      borderWidth={1}
      borderColor="$gray6"
      padding="$4"
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      {...props}
    >
      {children}
    </YStack>
  )
}

export { XStack, YStack }