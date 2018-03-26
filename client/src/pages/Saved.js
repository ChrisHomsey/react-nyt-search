import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Results from "../components/Results";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";

class Saved extends Component { 
    
    
    
    render(){
        return (
            <Container>
                <Jumbotron />

                <Row>
                    <Col size="sm-12">
                        <Results title="Saved Stories" />
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <Footer />
                    </Col>
                </Row>
            </Container>

        );
    };
}

export default Saved;