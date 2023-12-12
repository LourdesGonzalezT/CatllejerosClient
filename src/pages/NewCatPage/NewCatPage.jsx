import { Container } from "react-bootstrap"
import NewCatForm from "../../components/NewCatForm/NewCatForm"

const NewCatPage = () => {
    return (
        <Container>
            <h1>Formulario para registrar gato</h1>
            <hr />
            <NewCatForm />
        </Container>
    )

}

export default NewCatPage