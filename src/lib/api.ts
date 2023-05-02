import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCTION
})

export default api