import { Col } from "react-bootstrap"
import CatCard from "../CatCard/CatCard"

const CatsList = ({ cats }) => {
    return (
        cats.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <CatCard {...elm} />
                </Col>
            )
        })
    )
}

export default CatsList