import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col } from "react-bootstrap"



const Seccion1 = () => {
    return (
        <div>
            <Container fluid className="contenedor">

                <Row>
                    <h1>Seccion 1</h1>
                </Row>
                <Row>
                    <Col md={12} className="box1 mt-2">Box 1</Col>
                    <Col md={6} className="box2 mt-2 ">Box 2</Col>
                    <Col className="box3 mt-2">Box 3</Col>
                </Row>

            </Container>
        </div>

    )
}

export { Seccion1 }