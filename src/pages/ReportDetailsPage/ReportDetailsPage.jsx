import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import reportsService from "../../services/reports.services"
import { Container, Row, Col, Button } from "react-bootstrap"


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
            {
                !report
                    ?
                    <h1>CARGANDO</h1>
                    :
                    <>
                        <Row>
                            {/* <Col md={{ span: 4 }}>
                                <Link to={festival.webSite}>
                                    <div className="user-image">
                                        <Image src={festival.image} style={{ width: '100%' }} />
                                    </div>
                                </Link>
                            </Col> */}
                            <Col md={{ span: 6 }}>
                                <h3>Información</h3>
                                <ul>
                                    <li>Fecha : {report.title}</li>
                                    <li>Edición : {report.reportDate}</li>
                                    < h1 > aqui van a ir los detalles del gato con id: {report_id}</h1 >
                                    < h1 > aqui van a ir los detalles del gato con id: {report.title}</h1 >

                                </ul>
                                <hr />
                                <Link to="/noticias">
                                    <Button as="div" variant="dark">volver a todos las noticias</Button>
                                </Link>
                            </Col>

                        </Row>
                    </>
            }
        </Container>


    )
}


export default ReportDetailsPage