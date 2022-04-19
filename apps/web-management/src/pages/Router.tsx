import { FC, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { ManagementLayout } from '../components/ManagementLayout'
import { SuspenseRouteElement } from '../components/SuspenseRouteElement'

const CustomersForm = lazy(() => import('./Customers/Form/CustomersForm'))
const CustomersList = lazy(() => import('./Customers/List/CustomersList'))

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='customers' />} />

      <Route element={<ManagementLayout />}>
        <Route
          path='customers'
          element={
            <SuspenseRouteElement>
              <CustomersList />
            </SuspenseRouteElement>
          }
        >
          <Route
            path='new'
            element={
              <SuspenseRouteElement>
                <CustomersForm type='NEW' />
              </SuspenseRouteElement>
            }
          />

          <Route
            path='edit/:id'
            element={
              <SuspenseRouteElement>
                <CustomersForm type='EDIT' />
              </SuspenseRouteElement>
            }
          />
        </Route>

        <Route
          path='/products'
          element={
            <SuspenseRouteElement>
              <></>
            </SuspenseRouteElement>
          }
        />
      </Route>
    </Routes>
  )
}

export default Router
