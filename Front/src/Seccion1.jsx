import React from "react";
import './App.css'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"



const Seccion1 = () => {
    return (
        <Container fluid className="contenedor">

            <Row>
                <h1>Seccion 1</h1>
            </Row>

            <Row>
                <Col className="box1 mt-2">Box 1</Col>
                <Col md={6} className="box2 mt-2 ">Box 2</Col>
                <Col className="box3 mt-2">Box 3</Col>
            </Row>

        </Container>


    )
}

export { Seccion1 }