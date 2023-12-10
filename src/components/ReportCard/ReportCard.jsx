import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const ReportCard = ({ title, reportDate }) => {
    return (
        <Card className="mb-5" style={{ width: '18rem' }}>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2">{reportDate}</Card.Subtitle>
                <Link to={'/'} className="btn btn-dark btn-lg">Detalles</Link>
            </Card.Body>
        </Card>
    )
}

export default ReportCard
