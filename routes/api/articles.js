const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles for getting and posting saved articles"
router.route("/")
    .get(articlesController.findSaved)
    .post(articlesController.saveArticle);

// Matches with "api/articles/:id for removing saved articles"
router.route("/:id")
    .delete(articlesController.deleteArticle);
    
module.exports = router;