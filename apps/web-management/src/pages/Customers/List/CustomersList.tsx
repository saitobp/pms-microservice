import { FC } from 'react'
import { Paper, Table, Title, Menu, Group, Button, Input, LoadingOverlay } from '@mantine/core'
import { useNavigate, Outlet } from 'react-router-dom'
import { Search } from 'tabler-icons-react'

import { useCustomersList } from './hooks/useCustomersList'

const CustomersList: FC = () => {
  const navigate = useNavigate()
  const { customersQuery } = useCustomersList()

  if (customersQuery.isLoading || !customersQuery.data) {
    return <LoadingOverlay visible />
  }

  return (
    <>
      <Paper shadow='xs' radius='sm' p='md' mb='xs' style={{ position: 'sticky', top: 0 }}>
        <Group position='apart'>
          <Group>
            <Title order={4} pl='xs'>
              Lista de Clientes
            </Title>

            <Input placeholder='Pesquisar...' icon={<Search />} disabled />
          </Group>

          <Button onClick={() => navigate('./new')}>Novo</Button>
        </Group>
      </Paper>

      <Paper shadow='xs' radius='sm' p='md'>
        <Table highlightOnHover={customersQuery.data.data.data.length !== 0}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th style={{ width: '5%' }} align='center'>
                Opções
              </th>
            </tr>
          </thead>

          {customersQuery.data.data.data.length === 0 && (
            <tbody>
              <tr>
                <td>Sem clientes cadastrados...</td>
              </tr>
            </tbody>
          )}

          {customersQuery.data.data.data.length !== 0 && (
            <tbody>
              {customersQuery.data.data.data.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>
                  <td align='center'>
                    <Menu>
                      <Menu.Label>Opções</Menu.Label>
                      <Menu.Item onClick={() => navigate(`./edit/${customer.id}`)}>
                        Editar
                      </Menu.Item>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </Paper>

      <Outlet />
    </>
  )
}

export default CustomersList
