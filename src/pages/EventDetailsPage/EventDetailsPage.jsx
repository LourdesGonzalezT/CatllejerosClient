import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import eventsService from "../../services/events.services"
import { Container, Row, Col, Button } from "react-bootstrap"

const EventDetailsPage = () => {
    const { event_id } = useParams()
    const [event, setEvent] = useState({})

    useEffect(() => {
        eventsService
            .getOneEvent(event_id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            {
                !event
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
                                    <li>Fecha : {event.eventName}</li>
                                    <li>Edición : {event.date}</li>
                                    < h1 > aqui van a ir los detalles del gato con id: {event_id}</h1 >
                                    < h1 > aqui van a ir los detalles del gato con id: {event.eventName}</h1 >

                                </ul>
                                <hr />
                                <Link to="/eventos">
                                    <Button as="div" variant="dark">Volver a todos los eventos</Button>
                                </Link>
                            </Col>

                        </Row>
                    </>


            }
        </Container>

    )
}


export default EventDetailsPage