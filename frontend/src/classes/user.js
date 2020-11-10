import { getHeaders } from "../utils";
import axios from '../utils/axios'

export default class User {

    constructor() {
        this.isAuthenticated = false

        if (this.getToken()) {
            this.isAuthenticated = true
        }

    }


    async login(username, password) {
        const { data } = await axios.post("/auth/login/", { username, password })
        try {
            localStorage.setItem('token', data.key)
            this.isAuthenticated = true

            return this.isAuthenticated
        }
        catch (err) {
            throw err
        }
    }


    logout() {
        axios.post("/auth/logout/", {}, { headers: getHeaders() })
            .then(data => {
                localStorage.removeItem('token')
                this.isAuthenticated = false
            })
            .catch(err => console.dir(err))
    }


    getToken() {
        return localStorage.getItem('token') || ''
    }

}