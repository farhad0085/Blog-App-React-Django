import axios from '../utils/axios'
import {getHeaders} from '../utils'

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

    async createPost(postData) {
        console.log("postData", postData);
        try {
            const { data } = await axios.post(`/posts/`, {
                title: postData.title,
                body: postData.body
            }, {headers: getHeaders()})
            return data
        }
        catch {
            throw new Error("Error creating project")
        }
    }

}