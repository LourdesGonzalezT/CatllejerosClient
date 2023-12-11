import { Col } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"

const EventsList = ({ events }) => {
    return (
        events.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <EventCard {...elm} />
                </Col>

            )
        })
    )
}
export default EventsList