import { FC } from 'react'
import { Text, theme, Tabs, TabItem } from '@pms-microservices/ui'

const Products: FC = () => {
  return (
    <div style={{ padding: theme.spacing.medium, width: '100%' }}>
      <Text>Produtos</Text>

      <Tabs>
        <TabItem tabName='Listagem de Produtos'>
          <Text component='h2'>Listagem de produtos</Text>
        </TabItem>

        <TabItem tabName='Listagem de Items'>
          <Text component='h2'>Listagem de items</Text>
        </TabItem>

        <TabItem tabName='Tipos de Items'>
          <Text component='h2'>Tipos de Items</Text>
        </TabItem>
      </Tabs>
    </div>
  )
}

export default Products
