import axios from "axios";
const dev = true
export default axios.create({
  baseURL: dev ? 'http://localhost:4000/api/': 'https://api.chatafisha.com/api/',
})