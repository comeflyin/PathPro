import axios from "axios"
import type { AxiosRequestConfig, AxiosResponse } from "axios"

const instance = axios.create({
  baseURL: "/api",
  timeout: 10 * 1000,
  withCredentials: true,
})

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

/**
 * 封装请求
 */
export const request = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return instance.request<T>(config)
}

export default instance
