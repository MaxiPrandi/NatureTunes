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

            {/* Boton flotante WhatsApp */}
            <div>
                <a href="https://api.whatsapp.com/send?phone=1122334455" className="btn-wsp " target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" fill="currentColor" className="bi bi-whatsapp" viewBox="0 1 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg> </a>
            </div>

            <div ><Image className="imgCentral" src={Imagen1} alt="imagen bienvenida"  /></div>

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
                    <Col xs={12} md={4} className=" pt-3"><h3 className="bg-dark text-white p-2">Nuestro Sonido </h3>
                        <div className="py-2 shadow pb-5 p-3"><Image src={Imagen2} alt="imagen sonido" fluid /></div>
                        <p className="mt-3 p-2">En NatureTunes, creemos en la poderosa sinfonía que se crea al unir la música y la sostenibilidad. Estamos aquí para todos ustedes, apasionados amantes de la música en todas sus formas, desde el nostálgico disco de vinilo que hace palpitar el corazón, hasta los modernos soportes digitales que nos acompañan a donde vayamos.</p>
                    </Col>
                    <Col xs={12} md={4} className=" pt-3"><h3 className="bg-dark text-white p-2">Nuestros Materiales </h3>
                        <div className="py-2 shadow pb-5 p-3"><Image src={Imagen3} alt="imagen materiales" fluid /></div>
                        <p className="mt-3 p-2">Nuestros productos no son simplemente dispositivos de reproducción, son una expresión de nuestro compromiso con un mundo mejor. Cada creación de NatureTunes es el resultado de una meticulosa combinación entre tecnología de vanguardia y un enfoque innovador en la reutilización de materiales. Utilizamos materiales reciclados de la más alta calidad para dar vida a productos que no solo te ofrecen un rendimiento excepcional, sino que también cuentan una historia de sostenibilidad y responsabilidad ambiental.</p>
                    </Col>
                    <Col xs={12} md={4} className=" pt-3"><h3 className="bg-dark text-white p-2"> Nuestro Proceso</h3>
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
