import { Spinner, YStack, Text } from '@tamagui/core'
import { ReactNode } from 'react'

export interface LoadingProps {
  message?: string
}

export function Loading({ message = 'Loading...' }: LoadingProps) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space="$3">
      <Spinner size="large" color="$blue10" />
      <Text variant="body" color="$gray11">
        {message}
      </Text>
    </YStack>
  )
}

export interface SkeletonProps {
  width?: number | string
  height?: number | string
  borderRadius?: number | string
}

export function Skeleton({ width = '100%', height = 20, borderRadius = 4 }: SkeletonProps) {
  return (
    <YStack
      width={width}
      height={height}
      backgroundColor="$gray6"
      borderRadius={borderRadius}
      animation="slow"
      animateOnly={['backgroundColor']}
    />
  )
}

export interface EmptyStateProps {
  title: string
  description?: string
  action?: ReactNode
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space="$4" paddingHorizontal="$6">
      <YStack space="$2" alignItems="center">
        <Text variant="heading" textAlign="center" color="$gray12">
          {title}
        </Text>
        {description && (
          <Text variant="body" textAlign="center" color="$gray11">
            {description}
          </Text>
        )}
      </YStack>
      {action}
    </YStack>
  )
}