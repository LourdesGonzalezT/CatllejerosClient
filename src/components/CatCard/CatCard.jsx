import { Card, Button } from "react-bootstrap"

const CatCard = ({ name, age, image1, sex }) => {
    return (
        <Card className="mb-5" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2">{age} años {sex}</Card.Subtitle>
                <Button variant="primary">Descubre más</Button>
            </Card.Body>
        </Card>
    )
}

export default CatCard
