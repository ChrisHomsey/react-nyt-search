const db = require("../models");

// Defining methods for the articlesController
module.exports = {

    findSaved: (req, res) => {
        db.Article.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    saveArticle: (req, res) => {
		db.Article.create(req.body)
		    .then(dbModel => res.json(dbModel))
		    .catch(err => res.status(422).json(err));
    },
    deleteArticle: (req, res) => {
        db.Article.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};