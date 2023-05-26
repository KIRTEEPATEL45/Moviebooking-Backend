module.exports = (router) => {
    const genreController = require("../controllers/genre.controller");
  
    router.get("/genres", genreController.findAllGenres);
  
    return router;
  } 