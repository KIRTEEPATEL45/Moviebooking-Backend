module.exports = (router) => {
    const artistController = require("../controllers/artist.controller");
  
    router.get("/artists", artistController.findAllArtists);
  
    return router;
  } 