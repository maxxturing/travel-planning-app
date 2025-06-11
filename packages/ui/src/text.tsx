import { Text as TamaguiText, TextProps as TamaguiTextProps } from '@tamagui/core'
import { ReactNode } from 'react'

export interface TextProps extends TamaguiTextProps {
  children: ReactNode
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label'
}

export function Text({ children, variant = 'body', ...props }: TextProps) {
  const variantStyles = {
    heading: { fontSize: '$7', fontWeight: '600', lineHeight: '$7' },
    subheading: { fontSize: '$5', fontWeight: '500', lineHeight: '$5' },
    body: { fontSize: '$4', lineHeight: '$4' },
    caption: { fontSize: '$3', color: '$gray11', lineHeight: '$3' },
    label: { fontSize: '$3', fontWeight: '500', lineHeight: '$3' },
  }

  return (
    <TamaguiText {...variantStyles[variant]} {...props}>
      {children}
    </TamaguiText>
  )
}