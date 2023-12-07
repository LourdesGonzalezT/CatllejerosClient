import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import catsService from "../../services/cats.services"
import CatCard from "../../components/CatCard/CatCard"

const CatsListPage = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        catsService
            .getAllCats()
            .then(({ data }) => setCats(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Listado de gatos</h1>
            <hr />
            <Row>
                {
                    cats.map(elm => {
                        return (
                            <Col md={{ span: 4 }} key={elm._id}>
                                <CatCard {...elm} />
                            </Col>

                        )
                    })
                }
            </Row>

        </Container>


    )
}

export default CatsListPage