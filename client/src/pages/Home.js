import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {


    render() {
        return (
            <Container>
                <Jumbotron />
                <Row>
                    <Col size="sm-12">

                        <Search />

                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <Results title="Top Stories" />
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Home;