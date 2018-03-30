import axios from "axios";

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"; 

export default {
    // Search nyt for articles
    searchArticle: (searchTerm, numRecords, startYear, endYear) => {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101")
    },
    getSaved: () => {
        return axios.get("/api/articles/");
    },
    saveArticle: data => {
        return axios.post("/api/articles/", data);
    },
    deleteArticle: id => {
        return axios.delete("/api/articles/" + id);
    }
}