import axios from "axios";
const api = "b05f5029c2684b3495f4863361ca036c";

export default {
  // Gets all articles
  getArticle: function() {
    return axios.get("/api/articles");
  },
    //   Get articles from NY Times
    getArticlesNY: function() {
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api}&q=`);
    },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
