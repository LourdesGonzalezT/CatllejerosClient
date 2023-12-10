import { Card, Button } from "react-bootstrap"

const EventCard = ({ eventName }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{eventName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default EventCard