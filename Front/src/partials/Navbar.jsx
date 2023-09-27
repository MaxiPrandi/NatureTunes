import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Image, } from "react-bootstrap"
import { Link } from "react-router-dom";
import Logo from '../assets/Images/default2.png'




function NavBar() {
    return (


        <Container fluid>
            <Row className="barra text-light pt-2">
                <h5>Envio gratis a partir de $10.000.
                    <Link to='/Condiciones' className="text-decoration-none text-light ">  Ver condiciones</Link>
                </h5>
            </Row>
            {/* LOGO */}

            <Row className="mt-2 mx-5">
                <Col xs={12} md={2} className="mt-3">
                    <Link to="/" className="text-light">
                        <Image src={Logo} alt="logo" className="img-thumbnail border-0 p-1 d-flex" fluid />
                    </Link>
                </Col>
                {/* buscador */}

                <Col xs={12} md={8} className="mt-4">
                    <div className="input-wrapper">
                        <input type="search" placeholder="¿Que estas buscando?" className="buscador py-2 me-2 ps-3 rounded-pill" />
                        <button type="button" className="btn btn-outline-secondary rounded-pill boton">Buscar</button>
                    </div>
                </Col>

                {/* Iconos */}

                <Col xs={12} md={2} className="d-flex mt-1 justify-content-center">
                    <ul className="icons  mt-4 me-4">
                        {/* Icono Login */}
                        <ui>
                            <svg fill="#000000" width="22px" height="22px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><Link to="/Login" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>user</title> <path d="M4 28q0 0.832 0.576 1.44t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.44q0-1.44-0.672-2.912t-1.76-2.624-2.496-2.144-2.88-1.504q1.76-1.088 2.784-2.912t1.024-3.904v-1.984q0-3.328-2.336-5.664t-5.664-2.336-5.664 2.336-2.336 5.664v1.984q0 2.112 1.024 3.904t2.784 2.912q-1.504 0.544-2.88 1.504t-2.496 2.144-1.76 2.624-0.672 2.912z"></path> </g> </Link></svg>
                        </ui>
                        <ui className="icons-divider"></ui>
                        {/* Icono Carrito */}
                        <ui>
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Link to="/Cart"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12" stroke="#222222" strokeWidth="2" strokeLinecap="round"></path> <path d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z" fill="#222222"></path> </g></Link></svg>
                        </ui>
                    </ul>

                </Col>
            </Row>
            {/* Links de Navbar */}
            <Row className="justify-content-md-center mt-3">
                <Col xs="12" md="auto"><Link to='/productos/auriculares' className="linkk">AURICULARES</Link></Col>
                <Col xs="12" md="auto"><Link to='/productos/parlantes' className="linkk">PARLANTES</Link></Col>
                <Col xs="12" md="auto"><Link to='/productos/bandejas' className="linkk">BANDEJAS</Link></Col>
                <Col xs="12" md="auto"><Link to='/productos/proyecto' className="linkk">PROYECTO</Link></Col>
                <Col xs="12" md="auto"><Link to='/productos/materiales' className="linkk">MATERIALES</Link></Col>

            </Row>


        </Container>

    );
}

export { NavBar }


