module.exports = app => {
    const weedData = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", weedData.create);
  
    // Retrieve all Tutorials
    router.get("/", weedData.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", WeedData.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", WeedData.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", WeedData.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", WeedData.delete);
  
    // Delete all Tutorials
    router.delete("/", WeedData.deleteAll);
  
    app.use('/api/tutorials', router);
  };