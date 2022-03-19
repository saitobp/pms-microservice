import { TextFieldProps } from '@mui/material'

import { IControlled } from '../../utils/controlled.type'

export interface IControlledTextFieldProps extends IControlled {
  textFieldProps?: TextFieldProps
}
