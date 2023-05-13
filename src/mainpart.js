import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import coffee1 from "./products/menu-1.png";
import coffee2 from "./products/menu-2.png";
import coffee3 from "./products/menu-3.png";
import coffee4 from "./products/menu-4.png";


class Mainpart extends React.Component {
    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Coffee Menu</h1>
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
                            <Image src={coffee4} Alt="coffee14" height={300} width={250}/>
                        </Col>
                    </Row>
                </Container>

                <h1 style={{ textAlign: "center" }}></h1>
        


            </>
        )
    }
}

export default Mainpart;