import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { CustomersApi } from '../../../../api/CustomersApi'

import { ICommonSubPageFormProps } from '../../../../types/common.types'
import { ICustomerFormRequest } from '../../../../types/customers.types'

export const useCustomersForm = (props: ICommonSubPageFormProps) => {
  const { type } = props

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const customersApi = useMemo(() => new CustomersApi(), [])
  const { id } = useParams()

  useQuery(
    'customerById',
    async () => {
      if (!id) return

      return await customersApi.findById(id)
    },
    { enabled: !!id, onSuccess: values => methods.reset(values?.data) },
  )

  const methods = useForm<ICustomerFormRequest>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
    },
  })

  const handleMutationSuccess = () => {
    queryClient.invalidateQueries('customersList')
    navigate('/customers')
  }

  const customerInsertMutation = useMutation(
    async (values: ICustomerFormRequest) => {
      return await customersApi.insert(values)
    },
    { onSuccess: () => handleMutationSuccess() },
  )

  const customerUpdateMutation = useMutation(async (values: ICustomerFormRequest) => {
    if (!id) return

    return await customersApi.update(id, values)
  })

  const handleSubmit = methods.handleSubmit(values => {
    console.log(values)

    if (type === 'NEW') customerInsertMutation.mutate(values)
    if (type === 'EDIT') customerUpdateMutation.mutate(values)
  })

  const handleClose = () => {
    navigate('/customers')
  }

  return { methods, handleSubmit, handleClose }
}
