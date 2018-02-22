module.exports = function (app) {
    // Get Route
    app.get("/api/articles", (req, res) => {
        // Grab every document in the Articles collection
        db.Article
            .find({})
            .then((dbArticle) => {
                // If we were able to successfully find Articles, send them back to the client
                res.json(dbArticle);
            })
            .catch((err) => {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
    //Post Route
    app.post("/api/articles", (req, res) => {
        db.Article
            .create(req.body)
            .then((dbArticle) => {
                // If we were able to successfully update an Article, send it back to the client
                res.json(dbArticle);
            })
            .catch((err) => {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });

    app.delete("/api/articles/:articleId",  (req, res) => {
        db.Article
            .findByIdAndRemove(req.params.articleId, (err, article) => {  
                // We'll create a simple object to send back with a message and the id of the document that was removed
                // You can really do this however you want, though.
                let response = {
                    message: "Article successfully deleted",
                    id: article._id
                };
                res.status(200).send(response);
            });
    })
}