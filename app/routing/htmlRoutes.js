var path = require('path');

const path = require('path')

module.exports = function htmlRoutes(app){

    app.get("/", function(req,res) {
        res.sendfile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req,res) {
        res.sendfile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};


