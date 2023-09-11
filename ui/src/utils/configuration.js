import Axios from "axios";

export default Axios.create({
    baseUrl: process.env.BACKEND_URL
})