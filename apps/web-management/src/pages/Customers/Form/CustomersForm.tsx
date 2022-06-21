import { FC } from 'react'

import { ICommonSubPageFormProps } from '../../../types/common.types'

import { ControlledTextInput } from '../../../components/ControlledTextInput'
import { FormModal } from '../../../components'

import { useCustomersForm } from './hooks/useCustomersForm'

const CustomersForm: FC<ICommonSubPageFormProps> = (props) => {
  const { type } = props

  const { methods, handleSubmit, handleClose } = useCustomersForm(props)

  return (
    <FormModal
      title={type === 'NEW' ? 'Cadastro de Cliente' : 'Edição de Cliente'}
      formId='customersForm'
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
      <ControlledTextInput
        methods={methods}
        name='name'
        label='Nome'
        placeholder='Nome'
        autoComplete='none'
        required
      />

      <ControlledTextInput
        methods={methods}
        name='phone'
        label='Telefone'
        placeholder='Telefone'
        autoComplete='none'
        required
      />

      <ControlledTextInput
        methods={methods}
        name='address'
        label='Endereço'
        placeholder='Endereço'
        autoComplete='none'
        required
      />
    </FormModal>
  )
}

export default CustomersForm
