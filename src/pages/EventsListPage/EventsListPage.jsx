import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import eventsService from "../../services/events.services"
import EventsList from "../../components/EventsList/EventsList"

const EventsListPage = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <Container>
            <h1>SListados de los eventos</h1>
            <Row>
                <EventsList events={events} />
            </Row>
        </Container>
    )
}
export default EventsListPage