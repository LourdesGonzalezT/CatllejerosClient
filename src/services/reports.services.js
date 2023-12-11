import axios from "axios";

class ReportService {
    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/reports`
        })
    }
    getAllReports() {
        return this.api.get('/getAllReports')
    }

    getOneReport(report_id) {
        return this.api.get(`/getOneReport/${report_id}`)
    }

}

const reportsService = new ReportService()

export default reportsService