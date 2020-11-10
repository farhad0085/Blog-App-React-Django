import { getHeaders } from "../utils";
import axios from '../utils/axios'

export default class Profile {

    constructor() {
        this.isAuthenticated = false
    }

    async getProfileData(username) {
        console.log(username);
        try {
            const { data } = await axios.get("/auth/user", { headers: getHeaders() })
            return data
        }
        catch (err) {
            throw err
        }

    }
}