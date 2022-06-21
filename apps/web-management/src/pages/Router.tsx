import { FC, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { ManagementLayout } from '../components/ManagementLayout'
import { SuspenseRouteElement } from '../components/SuspenseRouteElement'

const CustomersList = lazy(() => import('./Customers/List/CustomersList'))
const CustomersForm = lazy(() => import('./Customers/Form/CustomersForm'))

const OrdersList = lazy(() => import('./Orders/List/OrdersList'))
const OrdersForm = lazy(() => import('./Orders/Form/OrdersForm'))

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='orders' />} />

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
          path='orders'
          element={
            <SuspenseRouteElement>
              <OrdersList />
            </SuspenseRouteElement>
          }
        >
          <Route
            path='new'
            element={
              <SuspenseRouteElement>
                <OrdersForm type='NEW' />
              </SuspenseRouteElement>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
