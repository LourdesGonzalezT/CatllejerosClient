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

    getOneCat(cat_id) {
        return this.api.get(`/getOneCat/${cat_id}`)
    }

    newCat(catData){
        return this.api.post('/newCat', catData)
    }

}

const catsService = new CatService()

export default catsService