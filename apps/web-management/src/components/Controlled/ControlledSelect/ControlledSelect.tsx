import { FC } from 'react'
import { FormControl, InputLabel, Select } from '@mui/material'
import { Controller } from 'react-hook-form'

import { IControlledSelectProps } from './utils/controlledSelect.types'

const ControlledSelect: FC<IControlledSelectProps> = props => {
  const { name, control, label, required, children, disabled } = props

  return (
    <FormControl variant='standard' fullWidth required={required}>
      <InputLabel>{label}</InputLabel>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} disabled={disabled}>
            {children}
          </Select>
        )}
      />
    </FormControl>
  )
}

export default ControlledSelect
