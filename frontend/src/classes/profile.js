import { getHeaders } from "../utils";
import axios from '../utils/axios'

export default class Profile {

    constructor() {
        this.isAuthenticated = false
    }

    async getProfileData(username) {
        try {
            const { data } = await axios.get(`/user/${username}/`)
            return data
        }
        catch (err) {
            throw err
        }
    }


    async getOwnProfileData() {
        try {
            const { data } = await axios.get("/auth/user/", {headers: getHeaders()})
            return data
        }
        catch (err) {
            throw err
        }
    }


    async updateProfile(postData){
        console.log(postData);
        try {
            const { data } = await axios.put(`/user/${postData.username}`, {
                ...postData
            }, {headers: getHeaders()})
            
            return data
        }
        catch (err) {
            throw err
        }
    }

}