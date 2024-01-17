import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import catsService from "../../services/cats.services"
import CatsList from "../../components/CatsList/CatsList"

const CatsListPage = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        catsService
            .getAllCats()
            .then(({ data }) => setCats(data))
            .catch(err => console.log(err));
    }, [catsService]); 


    return (
        <Container>
            <h1>Listado de gatos</h1>
            <hr />
            <Row>
                <CatsList cats={cats} />
            </Row>
        </Container>


    )
}

export default CatsListPage

