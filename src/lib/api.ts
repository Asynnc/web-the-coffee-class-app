import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.the-coffee-class.com.br/api'
})

export default api