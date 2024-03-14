import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios"

export type UseQueryProps = {
  url?: string
  method?: string
  executeImmediately?: boolean
  onSuccess?: ((response: AxiosResponse) => void) | null
  onUnauthorized?: ((error: AxiosError) => void) | null
  onError?: ((error: Error | AxiosError) => void) | null
  clientOptions?: AxiosRequestConfig
  apiClient?: AxiosInstance
}

export type UseQueryReturn = {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  status: string
  response?: any
  error?: any
  data?: any
  executeQuery: (data?: any, params?: any) => void
  resetQuery: () => void
}

export type QueryState = {
  status: string
  response?: any
  error?: any
}

export type QueryActions = {
  status: string
  payload?: any
}
