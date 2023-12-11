import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const EventCard = ({ eventName, _id }) => {
    return (
        <Card className="mb-5" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Link to={`/eventos/detalles/${_id}`} className="btn btn-dark btn-lg">Detalles</Link>
            </Card.Body>
        </Card>

    )
}

export default EventCard