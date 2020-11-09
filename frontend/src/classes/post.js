import axios from '../utils/axios'

export default class Post {


    async getPosts() {
        try {
            const { data } = await axios.get("/posts/")
            return data
        }
        catch {
            throw new Error("Error loading project")
        }
    }


    async getOnePost(id) {

        try {
            const { data } = await axios.get(`/posts/${id}`)
            return data
        }
        catch {
            throw new Error("Error loading project")
        }
    }

}