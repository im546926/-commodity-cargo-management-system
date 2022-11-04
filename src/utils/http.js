/* eslint-disable */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // 超时
  timeout: 5000,
  baseURL: 'http://localhost:9527'
})

// request 拦截器
service.interceptors.request.use(
  (config) => {

    return config

  },
  (error) => {

    return Promise.reject(error)

  }
)

// 响应拦截器
service.interceptors.response.use((res) => {

    return res.data

  },
  (error) => {
    return Promise.reject(error)
  })
export default service
