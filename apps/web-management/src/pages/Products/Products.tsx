import { FC, useState } from 'react'
import { Tabs, Tab, Box } from '@mui/material'
import { theme } from '@pms-microservices/ui'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Products: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [tab, setTab] = useState<number>(0)

  const items = [
    { name: 'Pizzas', onClick: () => navigate('./pizzas') },
    { name: 'Listagem de Items', onClick: () => navigate('./item-list') },
    { name: 'Tipos de Items', onClick: () => navigate('./item-type') },
  ]

  const onTabChange = (onClick: () => void, index: number) => {
    onClick()
    setTab(index)
  }

  return (
    <div style={{ padding: theme.spacing.medium, width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {' '}
        <Tabs value={tab}>
          {items.map((item, index) => (
            <Tab
              key={`products-tab-${index}`}
              label={item.name}
              onClick={() => onTabChange(item.onClick, index)}
            />
          ))}
        </Tabs>
      </Box>
      <div style={{ marginBottom: '16px' }}>
        <input type='text' placeholder='Pesquisar...' />

        <button>Visualizar</button>
        <button onClick={() => navigate(`${location.pathname}/new`)}>Novo</button>
        <button>Editar</button>
        <button>Remover</button>
      </div>

      <Outlet />
    </div>
  )
}

export default Products
