import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <Container fluid>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=1122334455" className="btn-wsp " target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" fill="currentColor" className="bi bi-whatsapp" viewBox="0 1 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg> </a>
                </div>

                <Row className="login">
                    <Col xs={12} md={6}><h2 className="fw-bold acceso">ACCEDER</h2>
                        <Form>
                            <Form.Group className="mb-5 text-start fw-bold" controlId="login">
                                <Form.Label>Nombre de usuario o Email*</Form.Label>
                                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-start fw-bold" controlId="pass1">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" />
                            </Form.Group>
                            <Form.Group>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3 text-start fw-bold">
                                        <Form.Check 
                                            type={type}
                                            id={`default-${type}`}
                                            label={`Recuerdame`}
                                        />

                                    </div>
                                ))}
                            </Form.Group>
                            <Button className="d-flex my-4" variant="dark">ACCEDER</Button>
                        </Form>
                        <p className="text-start fs-5">¿Olvidaste tu contraseña?</p>
                    </Col>
                    <Col xs={12} md={6}><h2 className="acceso fw-bold">REGISTRARSE</h2>
                        <Form>
                            <Form.Group className="mb-5 text-start fw-bold" controlId="signup">
                                <Form.Label>Dirección de correo electrónico *</Form.Label>
                                <Form.Control type="email" placeholder="nombre@ejemplo.com" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-start fw-bold" controlId="pass">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" />
                            </Form.Group>
                            <p className="text-start">Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web, gestionar el acceso a tu cuenta y otros propósitos descritos en nuestra política de privacidad.</p>


                            <Button className="d-flex my-4" variant="dark">REGISTRARSE</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}


export { Login }