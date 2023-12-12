import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand href="/home">Catllejeros </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as="span">
                            <Link to="/">Inicio</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/">Asociación</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/gatos">Adopta</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/noticias">Noticias</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/eventos">Eventos</Link>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <Link to="/">Contacto</Link>
                        </Nav.Link>
                        {/* <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/link">Asociación</Nav.Link>
                        <Nav.Link href="/link">Adopta</Nav.Link>
                        <Nav.Link href="/link">Noticias</Nav.Link>
                        <Nav.Link href="/link">Eventos</Nav.Link>
                        <Nav.Link href="/link">Contacto</Nav.Link> */}
                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/registrar-gato">Registrar Gatos</NavDropdown.Item>
                            <NavDropdown.Item href="/crear-evento">Registrar Eventos</NavDropdown.Item>
                            <NavDropdown.Item href="/crear-noticia">Registrar Noticias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Gatos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Eventos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Noticias</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Perfil
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation