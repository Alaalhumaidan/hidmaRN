import axios from "axios";

const instance = axios.create({
    baseURL: "://172.20.10.12:8000",
    
});
export default instance;