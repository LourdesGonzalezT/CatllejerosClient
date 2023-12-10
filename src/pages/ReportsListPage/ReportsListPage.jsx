import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import reportsService from "../../services/reports.services"
import ReportsList from "../../components/ReportsList/ReportsList"

const ReportsListPage = () => {

    const [reports, setReports] = useState([])

    useEffect(() => {
        reportsService
            .getAllReports()
            .then(({ data }) => setReports(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container>
            <h1>Listado de noticias</h1>
            <hr />
            <Row>
                <ReportsList reports={reports} />
            </Row>
        </Container>
    )
}

export default ReportsListPage