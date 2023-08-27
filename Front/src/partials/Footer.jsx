import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";




const Footer = () => {
    return(
        <Container fluid>
            <Row className="footer1">
                <Col xs={12} md={4}><h4>Atencion al cliente</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati?</p>
                </Col>
                <Col xs={12}md={4}><h4>Compañia </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati?</p>
                </Col>
                <Col xs={12}md={4}><h4>Siganos </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati?</p>
                </Col>
            </Row>
            <Row className="footer2">
                <Col>TÉRMINOS Y CONDICIONES POLÍTICA DE PRIVACIDAD DEFENSA DEL CONSUMIDOR
                </Col>
                <Col>Copyright 2023
                </Col>
            
            </Row>

        </Container>
        
    )
}

export { Footer }