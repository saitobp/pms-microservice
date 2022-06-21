import { FC } from 'react'
import { ActionIcon, Group, Text } from '@mantine/core'
import { Trash } from 'tabler-icons-react'

import { productDetailsLabel } from './utils/productDetailsLabel.constants'
import { IProductDetailsLabelProps } from './utils/productDetailsLabel.types'

const ProductDetailsLabel: FC<IProductDetailsLabelProps> = (props) => {
  const { label, details, onRemove } = props

  const handleProductLabel = () => {
    if (details.type === null) return ''

    return productDetailsLabel[details.type]
  }

  return (
    <Group noWrap position='apart'>
      <Text size='sm'>{`${handleProductLabel()}: ${label.text}`}</Text>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Text size='sm'>{`R$${label.price}`}</Text>

        <ActionIcon color='red' onClick={onRemove}>
          <Trash />
        </ActionIcon>
      </div>
    </Group>
  )
}

export default ProductDetailsLabel
