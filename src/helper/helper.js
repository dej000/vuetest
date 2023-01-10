import axios from 'axios'


const  instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    // timeout: 500,
    headers: {'accept': 'application/json','Authorization':`Bearer ${localStorage.getItem('accessToken')}`}
  });
  
  export default instance