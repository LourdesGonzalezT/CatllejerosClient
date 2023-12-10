import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const CatCard = ({ name, age, image1, sex, _id }) => {
    return (
        <Card className="mb-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2">{age} años {sex}</Card.Subtitle>
                <Link to={`/gatos/detalles/${_id}`} className="btn btn-dark btn-lg">Detalles</Link>
            </Card.Body>
        </Card>
    )
}

export default CatCard
