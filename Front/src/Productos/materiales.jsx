import React from "react";
import '../../public/styles/App.css'
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom";


const Materiales= () => {
    return (
        <>


            <Container fluid className="contenedor">

                <Row>
                    <h1>MATERIALES</h1>
                </Row>
                <Row>
                    <Col md={12} className="box1 mt-2">Box 1</Col>
                    <Col md={6} className="box2 mt-2 ">Box 2</Col>
                    <Col className="box3 mt-2">Box 3</Col>
                </Row>

            </Container>
        </>
    )
}


export { Materiales }