import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { InputAdornment, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { FormPanel } from '../../../../components/FormPanel/FormPanel'
import { ControlledTextField, ControlledSelect } from '../../../../components'

import { pizzaCategories } from './utils/pizzaForm.constants'
import { IPizzaFormSchema } from './utils/pizzaForm.types'

export const PizzaForm: FC = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: '',
      category: '',
      small: '',
      medium: '',
      large: '',
    },
  })

  const navigate = useNavigate()

  const onSubmit = (values: IPizzaFormSchema) => {
    console.log(values)
  }

  const onClose = () => {
    navigate('/products/pizzas')
  }

  return (
    <FormPanel
      title='Cadastro de Pizza'
      formId='pizza-form'
      onSubmit={handleSubmit(onSubmit)}
      onClose={onClose}
    >
      <ControlledTextField name='title' control={control} label='Nome do Produto' required />

      <ControlledSelect name='category' control={control} label='Categoria' required>
        {pizzaCategories?.map((category, index) => (
          <MenuItem key={`pizza-category-${index}`} value={category.category}>
            {category.label}
          </MenuItem>
        ))}
      </ControlledSelect>

      <ControlledTextField
        name='small'
        label='Preço pequeno'
        control={control}
        textFieldProps={{
          InputProps: {
            startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
          },
        }}
      />
      <ControlledTextField
        name='medium'
        label='Preço médio'
        control={control}
        textFieldProps={{
          InputProps: {
            startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
          },
        }}
      />

      <ControlledTextField
        name='large'
        label='Preço grande'
        control={control}
        textFieldProps={{
          InputProps: {
            startAdornment: <InputAdornment position='start'>R$</InputAdornment>,
          },
        }}
      />
    </FormPanel>
  )
}
