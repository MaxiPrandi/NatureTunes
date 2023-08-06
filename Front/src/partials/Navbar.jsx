import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

function NavBar() {
    return (


        <Container fluid>
            <Row className="barra text-light p-2">
                <h5>Envio gratis a partir de $10.000.
                    <Link to='/' className="text-decoration-none text-light ">  Ver condiciones</Link>
                </h5>
            </Row>
            <Row className="mt-3">
                <Col md={2} className="box1 mt-2">
                    <Link to="/" className="text-light">LOGO</Link>
                </Col>
                <Col md={8} className="mt-2 ">

                    <form action="" >
                        <input type="search" placeholder="¿Que estas buscando?" className="buscador me-3" />
                        <Button variant="outline-dark" size="sm">
                            <img src="./src/assets/images/lupa.png" width="25px" alt="lupa" />
                        </Button>
                    </form>
                </Col>
                <Col md={2} className="mt-3">
                    <div className="icons">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                    </div>
                </Col>
            </Row>

            <div className='links'>
                <Link to='/seccion1' className="me-4 linkk">AURICULARES</Link>
                <Link to='/seccion1' className="me-4 linkk">PARLANTES</Link>
                <Link to='/seccion1' className="me-4 linkk">BANDEJAS</Link>
                <Link to='/seccion1' className="me-4 linkk">PROYECTO</Link>
                <Link to='/seccion1' className="me-4 linkk">MATERIALES</Link>
            </div>


        </Container>

    );
}

export { NavBar }