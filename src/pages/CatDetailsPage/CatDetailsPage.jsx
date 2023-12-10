import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import catsService from "../../services/cats.services"
import { Container } from "react-bootstrap"

const CatDetailsPage = () => {
    const { cat_id } = useParams()
    const [cat, setCat] = useState({})

    useEffect(() => {
        catsService
            .getOneCat(cat_id)
            .then(({ data }) => setCat(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            < h1 > aqui van a ir los detalles del gato con id: {cat_id}</h1 >
            < h1 > aqui van a ir los detalles del gato con id: {cat.name}</h1 >
        </Container>


    )
}


export default CatDetailsPage