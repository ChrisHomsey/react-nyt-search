import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import {Results, Item, SaveBtn} from "../components/Results";
import Footer from "../components/Footer";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class Home extends Component {

    state = {
        articles: [],
        searchTerm: "",
        numRecords: "",
        startYear: "",
        endYear: ""        
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        //if (this.state.searchTerm && this.startYear && this.endYear) {
            API.searchArticle(this.state.searchTerm, this.state.numRecords, this.state.startYear, this.state.endYear)
                .then(res => this.setState({ articles: res.data.response.docs, topic: "", searchTerm: "", startYear: "", endYear: "" }))
		        .catch(err => console.log(err));
        //}
    }

    // removeSavedResult = resultIndex => {
    //     this.state.articles.splice(resultIndex, 1);

    // }

    handleArticleSave = (headline, author, url, resultIndex) => {
        API.saveArticle({
            headline: headline,
            author: author,
            url: url
        })
        .then(
            // this.removeSavedResult(resultIndex)
        )
        .catch(err => console.log(err));
        
    }

    

    render() {
        return (
            <Container>
                <Jumbotron />
                <Row>
                    <Col size="sm-12">

                        <Search>

                            <form>
                                <Input
                                    value={this.state.searchTerm}
                                    onChange={this.handleInputChange}
                                    name="searchTerm"
                                    placeholder="Article Search Term (required)"
                                />
                                <Input
                                    value={this.state.startYear}
                                    onChange={this.handleInputChange}
                                    name="startYear"
                                    placeholder="Start Year (required)"
                                />
                                <Input
                                    value={this.state.endYear}
                                    onChange={this.handleInputChange}
                                    name="endYear"
                                    placeholder="End Year (Optional)"
                                />
                                <FormBtn
                                    disabled={!(this.state.searchTerm && this.state.startYear && this.state.endYear)}
                                    onClick={this.handleSearchSubmit}
                                >
                                    Search
                                </FormBtn>
                            </form>

                        </Search>

                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <Results title="Top Stories">
                        {this.state.articles.map((article, index) => (
                            <Item key={article._id}>
                            <SaveBtn 
                                key={article._id}
                                onClick={
                                    () => this.handleArticleSave(
                                        article.headline.main, 
                                        article.byline.original, 
                                        article.web_url,
                                        index)
                                    }
                            /> 
                            
                            <div className="well" id="article-well-1">
                            <a target="_blank" href={article.web_url}><h3 className="articleHeadline"><span className="label label-primary">{index + 1}</span>
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
        )
    }

}

export default Home;