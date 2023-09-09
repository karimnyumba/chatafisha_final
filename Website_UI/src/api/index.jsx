import axios from "axios";
const dev = false
export default axios.create({
  baseURL: dev ? 'http://localhost:4000/api/': 'https://service-chatafishabackend.onrender.com/api/',
})