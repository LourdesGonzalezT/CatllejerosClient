import axios from "axios";


class EventService {
    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events`
        })
    }

    getAllEvents() {
        return this.api.get('/getAllEvents')
    }

}

const eventsService = new EventService()
export default eventsService