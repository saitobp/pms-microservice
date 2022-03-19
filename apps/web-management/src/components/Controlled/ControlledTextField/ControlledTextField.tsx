import { FC } from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

import { IControlledTextFieldProps } from './utils/controlledTextField.types'

const ControlledTextField: FC<IControlledTextFieldProps> = props => {
  const { name, control, textFieldProps, label, required } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...textFieldProps}
          {...field}
          label={label}
          required={required ? true : false}
          fullWidth={
            textFieldProps?.fullWidth !== (undefined && null) ? textFieldProps?.fullWidth : true
          }
          size={textFieldProps?.size !== (undefined && null) ? textFieldProps?.size : 'small'}
          variant={
            textFieldProps?.variant !== (undefined && null) ? textFieldProps?.variant : 'standard'
          }
        />
      )}
    />
  )
}

export default ControlledTextField
