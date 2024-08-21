import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const config = {
  baseURL: API_URL
}
const instance = axios.create(config)
instance.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`
instance.defaults.headers.post["Content-Type"] = "application/json"

export default instance
