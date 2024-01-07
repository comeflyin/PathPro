import axios from "axios"
import type { AxiosRequestConfig, AxiosResponse } from "axios"
import { showFailToast } from "vant"

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
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      showFailToast("服务端异常")
    } else {
      if (response.data.code !== 0) {
        showFailToast(response.data.msg)
        return Promise.reject(response)
      }
    }
    return response.data
  },
  (error) => {
    console.log(error)
  },
)

/**
 * 封装请求
 */
export const request = <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return instance.request<T>(config)
}

export default instance
