import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <Container fluid className="contenedor">
            <Row>
                <h1>NATURE TUNES FOTO</h1>
            </Row>
            <Row>
                <h3 className="text-start">ACERCA DE THE HOUSE OF MARLEY</h3>
                <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit molestiae exercitationem esse, corrupti obcaecati sequi sint fugiat illum error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus error odit aliquid dolor, nemo, doloribus laboriosam dolorum neque, sint quaerat id. Minima, at. Hic atque vel dolores quod laborum?</p>
            </Row>


            <Row>
                <Col className="box1 mt-2"><h4>Nuestro Sonido </h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, saepe.</p>
                </Col>
                <Col className="box2 mt-2 "><h4>Nuestros Materiales </h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, saepe.</p>
                </Col>
                <Col className="box3 mt-2"><h4> Nuestro Proceso</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, saepe.</p>
                </Col>
            </Row>

        </Container>


    );
}

export { Home }
