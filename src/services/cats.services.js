import axios from "axios";

class CatService {
    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cats`
        })
    }
    getAllCats() {
        return this.api.get('/getAllCats')
    }
}

const catsService = new CatService()

export default catsService