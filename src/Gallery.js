import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import coffee1 from "./Galleryimage/g-img-1.jpg";
import coffee2 from "./Galleryimage/g-img-4.jpg";
import coffee3 from "./Galleryimage/g-img-5.jpg";
import coffee4 from "./Galleryimage/g-img-6.jpg";
import coffee5 from "./Galleryimage/image1.jpg";
import coffee6 from "./Galleryimage/image2.jpg";
import coffee7 from "./Galleryimage/image3.jpg";
import coffee8 from "./Galleryimage/image4.jpg";



class Gallery extends React.Component{
    render(){
        return(
            <>
                <h1 style={{ textAlign: "center" }}>Gallery</h1>
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee1} Alt="coffee1" height={300} width={250} />
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee2} Alt="coffee2" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee3} Alt="coffee3" height={300} width={250} />
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee4} Alt="coffee4" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee5} Alt="coffee5" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee6} Alt="coffee6" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee7} Alt="coffee7" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={coffee8} Alt="coffee8" height={300} width={250}/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Gallery;