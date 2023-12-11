import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import reportsService from "../../services/reports.services"
import { Container } from "react-bootstrap"


const ReportDetailsPage = () => {
    const { report_id } = useParams()
    const [report, setReport] = useState({})

    useEffect(() => {
        reportsService
            .getOneReport(report_id)
            .then(({ data }) => setReport(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            < h1 > aqui van a ir los detalles del gato con id: {report_id}</h1 >
            < h1 > aqui van a ir los detalles del gato con id: {report.title}</h1 >
        </Container>


    )
}


export default ReportDetailsPage