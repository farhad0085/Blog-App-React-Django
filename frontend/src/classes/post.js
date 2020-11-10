import axios from '../utils/axios'
import { getHeaders } from '../utils'


const PAGE_SIZE = 10


export default class Post {

    constructor() {
        this.totalItem = 0
        this.totalPage = 1
        this.currentPage = 1
        this.hasNext = false
        this.hasPrev = false
    }

    async getPosts(pageNumber = 1) {
        try {
            const { data } = await axios.get(`/posts/?page=${pageNumber}`)

            if (data.next) {
                this.hasNext = true
            } else {
                this.hasNext = false
            }

            if (data.previous) {
                this.hasPrev = true
            } else {
                this.hasPrev = false
            }

            this.totalItem = data.count
            this.currentPage = pageNumber
            this.totalPage = this.getTotalPage()

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

        if (postData.picture) {
            form_data.append('picture', postData.picture, postData.picture.name);
        }

        try {
            const { data } = await axios.post(`/posts/`, form_data, { headers: headers })
            return data
        }

        catch (err) {
            throw err
        }
    }




    getTotalPage() {
        const totalItem = this.totalItem
        const pages = Math.ceil(totalItem / PAGE_SIZE)
        return pages

    }


}