import { FC } from 'react'
import { theme, Nav, INavItem } from '@pms-microservices/ui'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Products: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)

  const items: INavItem[] = [
    { name: 'Listagem de Produtos', onClick: () => navigate('./product-list') },
    { name: 'Listagem de Items', onClick: () => navigate('./item-list') },
    { name: 'Tipos de Items', onClick: () => navigate('./item-type') },
  ]
  return (
    <div style={{ padding: theme.spacing.medium, width: '100%' }}>
      <Nav title='Produtos' items={items} orientation='horizontal' />

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
