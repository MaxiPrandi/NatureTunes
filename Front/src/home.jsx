import React from "react";
import '/public/styles/App.css'
import { Container, Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom";
import Imagen1 from './assets/Images/imagen1.jpg'
import Imagen2 from './assets/Images/sonido.jpg'
import Imagen3 from './assets/Images/materiales.jpg'
import Imagen4 from './assets/Images/fabricacion.jpg'
import Imagen5 from './assets/Images/imagen5.jpg'

const Home = () => {
    return (
        <>
            <div className="imgCentral"><Image src={Imagen1} alt="imagen bienvenida" fluid /></div>

            <Container className="contenedor">
                <Row>
                    <h3 className="pt-4 fw-bold">ACERCA DE NATURETUNES</h3>
                    <p className="w-40 pt-2">

                        En un mundo donde la conciencia ambiental se encuentra en constante evolución y la música nos conecta de formas inigualables, nace NatureTunes: una marca joven y vibrante destinada a aquellos corazones jóvenes que comparten un amor profundo tanto por los ritmos envolventes como por nuestro preciado planeta. <br />

                        Explora nuestra gama de dispositivos diseñados con precisión, desde altavoces que llenan tus espacios con melodías cautivadoras hasta auriculares que te sumergen en un mundo de sonidos cristalinos. Cada artículo es una obra de arte en sí misma, elaborada con pasión y respeto por nuestro entorno. <br />

                        Únete a nosotros en este viaje emocionante mientras creamos una comunidad de individuos apasionados que encuentran alegría en cada acorde y se esfuerzan por preservar la belleza natural de nuestro planeta. Juntos, estamos tejiendo melodías y recuerdos mientras tejemos un futuro más brillante para las generaciones venideras.<br />

                        NatureTunes: Donde la música encuentra su eco sostenible. Adelante, ¡dale play a un mundo mejor!</p>
                </Row>


                <Row className="mb-5">
                    <Col className="box1 pt-3 m-1"><h3 className="bg-dark text-white p-2 fw-bold">Nuestro Sonido </h3>
                        <div className="py-2 shadow pb-5 p-3"><Image src={Imagen2} alt="imagen sonido" fluid /></div>
                        <p className="mt-3 p-2">En NatureTunes, creemos en la poderosa sinfonía que se crea al unir la música y la sostenibilidad. Estamos aquí para todos ustedes, apasionados amantes de la música en todas sus formas, desde el nostálgico disco de vinilo que hace palpitar el corazón, hasta los modernos soportes digitales que nos acompañan a donde vayamos.</p>
                    </Col>
                    <Col className="box2 pt-3 m-1"><h3 className="bg-dark text-white p-2 fw-bold">Nuestros Materiales </h3>
                        <div className="py-2 shadow pb-5 p-3"><Image src={Imagen3} alt="imagen materiales" fluid /></div>
                        <p className="mt-3 p-2">Nuestros productos no son simplemente dispositivos de reproducción, son una expresión de nuestro compromiso con un mundo mejor. Cada creación de NatureTunes es el resultado de una meticulosa combinación entre tecnología de vanguardia y un enfoque innovador en la reutilización de materiales. Utilizamos materiales reciclados de la más alta calidad para dar vida a productos que no solo te ofrecen un rendimiento excepcional, sino que también cuentan una historia de sostenibilidad y responsabilidad ambiental.</p>
                    </Col>
                    <Col className="box3 pt-3 m-1"><h3 className="bg-dark text-white p-2 fw-bold"> Nuestro Proceso</h3>
                        <div className="py-2 shadow pb-5 p-3"><Image src={Imagen4} alt="imagen fabricacion" fluid /></div>
                        <p className="mt-3 p-2">En NatureTunes, no solo estamos cambiando la forma en que disfrutas de tu música favorita, sino que también estamos contribuyendo activamente a la reducción de residuos y al aprovechamiento de recursos valiosos. Cada vez que elijes uno de nuestros productos, te unes a nuestra misión de marcar la diferencia, nota a nota.</p>
                    </Col>
                </Row>
            </Container>
            <div className="w-100"><Image src={Imagen5} alt="imagen naturaleza" fluid /></div>
        </>


    );
}

export { Home }
