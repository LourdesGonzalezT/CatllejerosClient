import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import eventsService from "../../services/events.services"
import { Container } from "react-bootstrap"

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
            < h1 > aqui van a ir los detalles del evento id: {event_id}</h1 >
            < h1 > aqui van a ir los detalles del evento id: {event.eventName}</h1 >
        </Container>


    )
}


export default EventDetailsPage