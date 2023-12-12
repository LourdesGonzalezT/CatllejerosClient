import { Button, Form, Row, Col } from 'react-bootstrap';

const NewCatForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del gatete</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Row>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre del gatete</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Col>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del gatete</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del gatete</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="observations">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <div className='d-grid'>
                <Button variant="dark" type="submit">Crear Festival</Button>
            </div>
        </Form>
    )
}
export default NewCatForm 