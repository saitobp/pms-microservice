import { FC } from 'react'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface IItemProps {
  index: number
}

const Items: FC<IItemProps> = props => {
  const { index } = props

  const methods = useFormContext()

  return (
    <div>
      <TextField
        defaultValue={methods.getValues(`items.${index}.name`)}
        variant='standard'
        label='Nome'
        disabled
        fullWidth
      />
    </div>
  )
}

export default Items
