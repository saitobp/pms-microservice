import { AxiosResponse } from 'axios'

export interface ICommonSubPageFormProps {
  type: ISubPageFormType
}

export type ISubPageFormType = 'NEW' | 'EDIT'

export interface IApiListResult<T> extends AxiosResponse {
  data: {
    data: T[]
  }
}
