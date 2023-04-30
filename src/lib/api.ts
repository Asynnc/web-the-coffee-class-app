import axios from 'axios'

const api = axios.create({
  baseURL: 'http://213.136.81.169:3001/api'
})

export default api