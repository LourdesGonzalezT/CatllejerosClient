import { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import catsService from '../../services/cats.services';

const NewCatForm = () => {
    const handleInputChange = e => {
        const { name, value } = e.target
        setCatData({ ...catData,[name]: value })
    }
    const [catData, setCatData] = useState({
        name: '',
        age: '',
        sex: '',
        aboutCat: '',
        image1: '',
        image2: ''
    })
    const handleSubmit = event => {
        event.preventDefault()
        catsService
        .newCat(catData)
        .then(()=> alert('done'))
        .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre del gatete</Form.Label>
                <Form.Control type="text" value={catData.name} onChange={handleInputChange} name="name" />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="age">
                        <Form.Label>Edad del gatete</Form.Label>
                        <Form.Control type="text" value={catData.age} onChange={handleInputChange} name="age" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="sex">
                        <Form.Label>Género:</Form.Label>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Macho"
                                name="sex"
                                id="male"
                                checked={catData.sex === 'macho'}
                                onChange={() => setCatData({ ...catData, sex: 'macho' })}

                            />
                            <Form.Check
                                type="radio"
                                label="Hembra"
                                name="sex"
                                id="female"
                                checked={catData.sex === 'hembra'}
                                onChange={() => setCatData({ ...catData, sex: 'hembra' })}
                            />
                        </div>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="aboutCat">
                <Form.Label>Información sobre el gatete</Form.Label>
                <Form.Control as="textarea" style={{ height: '100px' }} maxLength={1000}
                    value={catData.aboutCat} onChange={handleInputChange} name="aboutCat" />
            </Form.Group>
            <Form.Group controlId="image1">
                <Form.Label>Imagen 1 del gatete</Form.Label>
                <Form.Control type="file" accept="image/*" value={catData.image1} onChange={handleInputChange} name="image1" />
            </Form.Group>

            <Form.Group controlId="image2">
                <Form.Label>Imagen 2 del gatete</Form.Label>
                <Form.Control type="file" accept="image/*" value={catData.image2} onChange={handleInputChange} name="image2" />
            </Form.Group>
            <div className='d-grid'>
                <Button variant="dark" type="submit">Registrar gatete</Button>
            </div>
        </Form>
    )
}
export default NewCatForm 