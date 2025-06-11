import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps } from '@tamagui/core'
import { ReactNode } from 'react'

export interface ButtonProps extends TamaguiButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost'
  size?: 'small' | 'medium' | 'large'
}

export function Button({ children, variant = 'primary', size = 'medium', ...props }: ButtonProps) {
  return (
    <TamaguiButton
      backgroundColor={variant === 'primary' ? '$blue10' : variant === 'destructive' ? '$red10' : '$gray6'}
      color={variant === 'ghost' ? '$blue10' : '$white1'}
      borderColor={variant === 'ghost' ? '$blue10' : 'transparent'}
      borderWidth={variant === 'ghost' ? 1 : 0}
      paddingHorizontal={size === 'small' ? '$3' : size === 'large' ? '$6' : '$4'}
      paddingVertical={size === 'small' ? '$2' : size === 'large' ? '$4' : '$3'}
      borderRadius="$4"
      pressStyle={{ opacity: 0.8 }}
      {...props}
    >
      {children}
    </TamaguiButton>
  )
}