import axios from "axios";

export default axios.create({
    baseURL: "https://todolist-9f57e-default-rtdb.asia-southeast1.firebasedatabase.app"
})