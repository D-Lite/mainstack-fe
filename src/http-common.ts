import axios from "axios";

export default axios.create({
    baseURL: "https://fe-task-api.mainstack.io",
    headers: {
        "Content-type": "application/json"
    }
});