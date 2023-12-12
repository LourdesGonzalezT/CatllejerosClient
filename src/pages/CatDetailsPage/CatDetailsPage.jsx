import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import catsService from "../../services/cats.services"
import { Container, Row, Col, Button } from "react-bootstrap"

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
            {
                !cat
                    ?
                    <h1>CARGANDO</h1>
                    :
                    <>
                        <Row>
                            {/* <Col md={{ span: 4 }}>
                                <Link to={festival.webSite}>
                                    <div className="user-image">
                                        <Image src={festival.image} style={{ width: '100%' }} />
                                    </div>
                                </Link>
                            </Col> */}
                            <Col md={{ span: 6 }}>
                                <h3>Información</h3>
                                <ul>
                                    <li>Nombre : {cat.name}</li>
                                    <li>Edad : {cat.age}</li>
                                    < h1 > aqui van a ir los detalles del gato con id: {cat_id}</h1 >
                                    < h1 > aqui van a ir los detalles del gato con id: {cat.name}</h1 >

                                </ul>
                                <hr />
                                <Link to="/gatos">
                                    <Button as="div" variant="dark">Volver a todos los gatos</Button>
                                </Link>
                            </Col>

                        </Row>
                    </>


            }
        </Container>


    )
}


export default CatDetailsPage