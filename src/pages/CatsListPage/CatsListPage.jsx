import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import catsService from "../../services/cats.services"

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
            {cats.map(elm => <h3>{elm.name}</h3>)

            }
        </Container>


    )
}

export default CatsListPage