import { TextInputProps } from '@mantine/core'
import { UseFormReturn } from 'react-hook-form'

export interface IControlledTextInput extends TextInputProps {
  name: string
  methods: UseFormReturn<any, any>
}
