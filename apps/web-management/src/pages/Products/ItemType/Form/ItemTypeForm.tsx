import { FC } from 'react'
import { Panel } from '@pms-microservices/ui'
import { useNavigate } from 'react-router-dom'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'

import { Configuration } from './components'

const ItemTypeForm: FC = () => {
  const navigate = useNavigate()
  const methods = useForm()
  const configurations = useFieldArray({ control: methods.control, name: 'configuration' })

  return (
    <Panel
      isOpen
      title='Cadastro de Tipo de Item'
      onClose={() => navigate('/products/item-type')}
      formId='teste'
    >
      <form onSubmit={methods.handleSubmit(data => console.log(data))} id='teste'>
        <label htmlFor='name'>Nome</label>
        <input id='name' {...methods.register('name')} />

        <h3>Configurações</h3>

        {configurations.fields.map((field, index) => (
          <FormProvider {...methods} key={field.id}>
            <Configuration index={index} />
          </FormProvider>
        ))}

        <button onClick={() => configurations.append({ name: '', options: [], type: 'fixed' })}>
          Nova configuração
        </button>
      </form>
    </Panel>
  )
}

export default ItemTypeForm
