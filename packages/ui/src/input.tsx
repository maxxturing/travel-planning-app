import { Input as TamaguiInput, InputProps as TamaguiInputProps, YStack, Text } from '@tamagui/core'

export interface InputProps extends TamaguiInputProps {
  label?: string
  error?: string
  required?: boolean
}

export function Input({ label, error, required, ...props }: InputProps) {
  return (
    <YStack space="$2">
      {label && (
        <Text fontSize="$4" fontWeight="500" color="$gray12">
          {label}
          {required && <Text color="$red10"> *</Text>}
        </Text>
      )}
      <TamaguiInput
        borderColor={error ? '$red8' : '$gray8'}
        borderWidth={1}
        borderRadius="$4"
        paddingHorizontal="$3"
        paddingVertical="$3"
        fontSize="$4"
        backgroundColor="$gray1"
        focusStyle={{
          borderColor: error ? '$red10' : '$blue8',
          backgroundColor: '$white1',
        }}
        {...props}
      />
      {error && (
        <Text fontSize="$3" color="$red10">
          {error}
        </Text>
      )}
    </YStack>
  )
}