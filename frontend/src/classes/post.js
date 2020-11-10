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
        const headers = getHeaders()
        headers['content-type'] = 'multipart/form-data'
        
        let form_data = new FormData();
        
        form_data.append('title', postData.title);
        form_data.append('body', postData.body);

        if (postData.picture){
            form_data.append('picture', postData.picture, postData.picture.name);
        }

        try {
            const { data } = await axios.post(`/posts/`, form_data, {headers: headers})
            return data
        }

        catch (err) {
            throw err
        }
    }

}