import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts/";

const postsService = {
    get: async () => {
        const { data } = await axios.get(URL);
        return data;
    }
};
export default postsService;
