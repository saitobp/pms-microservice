import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Panel } from '@pms-microservices/ui'

const ProductListForm: FC = () => {
  const navigate = useNavigate()

  return (
    <Panel isOpen onClose={() => navigate('/products/product-list')} title='Cadastro de Produtos'>
      <h1>Form</h1>
    </Panel>
  )
}

export default ProductListForm
