import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import {Results, Item, DeleteBtn} from "../components/Results";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";

class Saved extends Component { 
    
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadSavedArticles();
    }

    loadSavedArticles = () => {
        API.getSaved()
            .then( res => this.setState( { articles: res.data }))
            .then( () => console.log(this.state.articles))
            .catch(err => console.log(err));
    }

    handleArticleDelete = (id) => {
        API.deleteArticle(id)
            .then(res => this.loadSavedArticles())
            .catch(err => console.log(err));
    }



    render(){
        return (
            <Container>
                <Jumbotron />

                <Row>
                    <Col size="sm-12">
                    <Results title="Saved Stories">
                        {this.state.articles.map((article, index) => (
                            <Item key={article._id}>
                            <DeleteBtn
                                onClick={() => this.handleArticleDelete(article._id)}
                            />
                            
                            <div className="well">
                            <a target="_blank" href={article.url}><h3 className="articleHeadline"><span className="label label-primary">{index + 1}</span>
                            <strong> {article.headline}</strong></h3></a>
                            <h5>{article.author}</h5></div>
                            </Item>
                        ))}
                        </Results>
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