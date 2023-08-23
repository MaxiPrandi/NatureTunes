import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom";
import Imagen1 from './assets/Images/imagen1.jpg'



const Home = () => {
    return (
        <>
        <div className="imgCentral"><Image src={Imagen1} alt="imagen bienvenida" fluid/></div>

        <Container fluid className="contenedor">
            <Row>
                <h3 className="pt-4">ACERCA DE la Hermana OF MARLEY</h3>
                <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit molestiae exercitationem esse, corrupti obcaecati sequi sint fugiat illum error?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus error odit aliquid dolor, nemo, doloribus laboriosam dolorum neque, sint quaerat id. Minima, at. Hic atque vel dolores quod laborum?</p>
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

        </Container></>


    );
}

export { Home }
