import axios from "axios";
const dev = false
export const backend_url = dev ? 'http://localhost:4000': 'https://api.chatafisha.com'
export default axios.create({
  baseURL: dev ? 'http://localhost:4000/api/': 'https://api.chatafisha.com/api/',
})