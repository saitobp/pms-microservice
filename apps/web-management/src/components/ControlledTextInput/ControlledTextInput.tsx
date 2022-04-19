import { FC } from 'react'
import { TextInput } from '@mantine/core'
import { Controller } from 'react-hook-form'

import { IControlledTextInput } from './utils/controlledTextInput.types'

const ControlledTextInput: FC<IControlledTextInput> = props => {
  const { methods, name } = props

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => (
        <TextInput {...props} name={field.name} value={field.value} onChange={field.onChange} />
      )}
    />
  )
}

export default ControlledTextInput
