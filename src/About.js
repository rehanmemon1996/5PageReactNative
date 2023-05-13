import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Sidepic from "./About us/about-img-1.png"

class About extends React.Component{
    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className="container my-5">
                            <div className="heading-secting">
                               <h1 style={{textAlign: "center"}}>About Us</h1>
                            </div>
                            <div className="explaination">
                                <h1>Why Choose Us?</h1>
                                <h3>The Best Coffee Maker In The Town</h3>
                                <p>Coffee, like tea, has caffeine which acts as a brain stimulant and leads to alertness making coffee breaks much awaited especially in jobs with high stress levels. The popular coffees on a menu are Espresso, Café Latte, Macchiato, Choc Latte, etc. that may have added milk, or other ingredients like nutmeg. The taste ranges from bitter [as in an Espresso] to mild sweet [as brewed in some parts of India], served with a large helping of milk and sugar. Instant coffee needs no brewing. Cold coffee is also a popular milk based drink. In many recipes, especially desserts, such as Tiramisu and some Ice Creams, coffee is used as a popular flavouring agent.</p>
                            </div>
                            <div className="btn-section">
                            <Button variant="primary">Read More</Button>
                            </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="image my-5">
                            <img src={Sidepic} alt="image" width={400} height={300} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default About;