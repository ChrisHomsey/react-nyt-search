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
            .catch(err => console.log(err));
    }

    handleArticleDelete = (id) => {
        API.deleteArticle()
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
                            <Item>
                            <DeleteBtn
                                onClick={() => this.handleArticleDelete(article._id)}
                            />
                            
                            <div class="well" id="article-well-1">
                            <a target="_blank" href={article.web_url}><h3 class="articleHeadline"><span class="label label-primary">{index + 1}</span>
                            <strong> {article.headline.main}</strong></h3></a>
                            <h5>{article.byline.original}</h5></div>
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