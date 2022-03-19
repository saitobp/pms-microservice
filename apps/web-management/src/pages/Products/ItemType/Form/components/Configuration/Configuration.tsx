import { FC, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { IConfigurationProps } from './utils/configuration.types'

const Configuration: FC<IConfigurationProps> = props => {
  const { index: configIndex } = props

  const { register, control, getValues } = useFormContext()
  const options = useFieldArray({ control, name: `configuration.${configIndex}.options` })

  const [configurationType] = useState<string>(getValues(`configuration.${configIndex}.type`))

  // useEffect(() => {
  //   setConfigurationType(getValues(`configuration.${configIndex}.type`))
  // }, [watch, getValues, configIndex])

  return (
    <div style={{ marginBottom: '16px' }}>
      <div>
        <label htmlFor={`configuration-${configIndex}-name`}>Configuração</label>
        <input
          id={`configuration-${configIndex}-name`}
          type='text'
          {...register(`configuration.${configIndex}.name`)}
        />
      </div>

      <div>
        <label htmlFor={`configuration-${configIndex}-type`}>Tipo</label>
        <select id={`configuration-${configIndex}-type`} {...register(`configuration.${configIndex}.type`)}>
          <option value='fixed'>Fixo</option>

          <option value='dynamic'>Dinamico</option>
        </select>
      </div>

      {configurationType === 'fixed' &&
        options.fields.map((field, index) => (
          <div key={field.id}>
            <label htmlFor={`configuration-${configIndex}-options-${index}-option`}>Opção</label>
            <input
              id={`configuration-${configIndex}-options-${index}-option`}
              type='text'
              {...register(`configuration.${configIndex}.options.${index}.option`)}
            />
          </div>
        ))}

      <button onClick={() => options.append({ option: '' })}>Nova opção</button>
    </div>
  )
}

export default Configuration
