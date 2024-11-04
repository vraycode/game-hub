import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"62fb677bb414477b9f7ac40a2a485c50"
    }
})