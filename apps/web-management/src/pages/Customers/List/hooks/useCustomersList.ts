import { useMemo } from 'react'
import { useQuery } from 'react-query'

import { CustomersApi } from '../../../../api/CustomersApi'

export const useCustomersList = () => {
  const customersApi = useMemo(() => new CustomersApi(), [])

  const customersQuery = useQuery('customersList', async () => {
    return await customersApi.list()
  })

  return { customersQuery }
}
