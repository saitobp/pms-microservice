import { Control } from 'react-hook-form'

export interface IControlled {
  name: string
  control: Control<any, any>
  label: string
  required?: boolean
  disabled?: boolean
}
