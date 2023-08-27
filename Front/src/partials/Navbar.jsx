import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom";
import Logo from '../assets/Images/default2.png'



function NavBar() {
    return (


        <Container fluid>
            <Row className="barra text-light pt-2">
                <h5>Envio gratis a partir de $10.000.
                    <Link to='/' className="text-decoration-none text-light ">  Ver condiciones</Link>
                </h5>
            </Row>
            {/* LOGO */}

            <Row className="mt-2 mx-5">
                <Col xs={12} md={2} className="mt-3">
                    <Link to="/" className="text-light">
                        <Image src={Logo}  alt="logo" className="img-thumbnail border-0 p-1 d-flex" fluid />
                    </Link>
                </Col>
                {/* buscador */}

                <Col xs={12} md={8} className="mt-4">
                    <div className="input-wrapper">
                        <input type="search" placeholder="¿Que estas buscando?" className="buscador py-2 me-2 ps-3 rounded-pill" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="input-icon lupa" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd" /></svg>
                        <button type="button" className="btn btn-outline-secondary rounded-pill boton">Buscar</button>
                    </div>
                </Col>

                {/* Iconos */}

                <Col xs={12} md={2} className="d-flex justify-content-center ">
                    <div className="icons w-4 mt-4 p-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 25 25" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 25 25" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                    </div>
                </Col>
            </Row>
            {/* Links de Navbar */}
            <Row className='links mt-4'>

                <Col xs={12} md={3}>
                    <Link to='/seccion1' className="me-4 linkk">AURICULARES</Link>
                </Col>
                <Col xs={12} md={2}>
                    <Link to='/seccion1' className="me-4 linkk">PARLANTES</Link>
                </Col>
                <Col xs={12} md={2}>
                    <Link to='/seccion1' className="me-4 linkk">BANDEJAS</Link>
                </Col>
                <Col xs={12} md={2}>
                    <Link to='/seccion1' className="me-4 linkk">PROYECTO</Link>
                </Col>
                <Col xs={12} md={3}>
                    <Link to='/seccion1' className="me-4 linkk">MATERIALES</Link>
                </Col>
            </Row>


        </Container>

    );
}

export { NavBar }

