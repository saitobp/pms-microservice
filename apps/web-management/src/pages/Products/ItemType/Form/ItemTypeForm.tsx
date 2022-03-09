import { FC } from 'react'
import { Panel } from '@pms-microservices/ui'
import { useNavigate } from 'react-router-dom'
import { useForm, useFieldArray } from 'react-hook-form'

const Nested: FC<{ configurationIndex: number; register: any; control: any }> = ({
  configurationIndex,
  register,
  control,
}) => {
  // const { register, control } = useForm()
  const { fields, append } = useFieldArray({ control, name: `configuration.${configurationIndex}.options` })

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label htmlFor={`config-name-${index}`}>Opção</label>
          <input
            type='text'
            id={`config-name-${index}`}
            {...register(`configuration.${configurationIndex}.options.${index}.option`)}
          />
        </div>
      ))}

      <button onClick={() => append({ option: '' })}>Nova opção</button>
    </div>
  )
}

const ItemTypeForm: FC = () => {
  const navigate = useNavigate()
  // const [configuration, setConfiguration] = useState<IConfiguration[]>([])
  const { register, handleSubmit, control } = useForm()
  const configurations = useFieldArray({ control, name: 'configuration' })

  console.log(configurations.fields)

  return (
    <Panel isOpen title='Cadastro de Tipo de Item' onClose={() => navigate('/products/item-type')}>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor='name'>Nome</label>
        <input id='name' {...register('name')} />

        <h3>Configurações</h3>

        {configurations.fields.map((field, index) => (
          <div key={field.id}>
            <div>
              <input
                type='text'
                id={`config-name-${index}`}
                placeholder='Nome'
                {...register(`configuration.${index}.name`)}
              />
            </div>

            <Nested configurationIndex={index} register={register} control={control} />

            <br />
          </div>
        ))}

        <button onClick={() => configurations.append({ name: '', options: [] })}>Nova configuração</button>

        <button onClick={handleSubmit(data => console.log(data))}>Test</button>
      </form>
    </Panel>
  )
}

export default ItemTypeForm
