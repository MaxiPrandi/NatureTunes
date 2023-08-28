import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <Container fluid>
            <Row className="footer1">
                <Col xs={12} md={4}><h4>Atencion al cliente</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati?</p>
                </Col>
                <Col xs={12} md={4}><h4>Compañia </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati?</p>
                </Col>
                <Col xs={12} md={4}><h4>Siganos </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati?</p>
                </Col>
            </Row>
            <Row className="footer2 pt-3">
                <Col xs={12} md={6}>
                    <div className="d-flex justify-content-around">
                        <Link to='/' className="link-secondary link-underline-dark" ><p>TÉRMINOS Y CONDICIONES</p></Link>
                        <Link to='/' className="link-secondary link-underline-dark"><p>POLÍTICA DE PRIVACIDAD</p> </Link>
                        <Link to='/' className="link-secondary link-underline-dark" ><p>DEFENSA DEL CONSUMIDOR</p> </Link>
                    </div>
                </Col>
                <Col xs={12} md={6}><p className="text-secondary">Copyright © 2023</p>
                </Col>

            </Row>

        </Container>

    )
}

export { Footer }