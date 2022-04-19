import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { AppShell, Navbar, Header, Title } from '@mantine/core'

import { NavbarItem } from '../NavbarItem'

import { links } from './utils/managementLayout.constants'

const ManagementLayout: FC = () => {
  return (
    <AppShell
      fixed
      padding='md'
      navbar={
        <Navbar width={{ base: 250 }} p='xs'>
          {links.map((link, i) => (
            <NavbarItem key={i} label={link.label} url={link.url} />
          ))}
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          <Title order={3}>PMS - Pizzaria Management System</Title>
        </Header>
      }
      styles={theme => ({ main: { backgroundColor: theme.colors.gray[0] } })}
    >
      <Outlet />
    </AppShell>
  )
}

export default ManagementLayout
