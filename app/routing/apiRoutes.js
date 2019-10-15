var friends = require("../data/friends.js")

module.exports = function(app){

    //api GET req.
    app.get('/api/friends', function(req,res){
        res.json(friends);
    })
    
    app.post('/api/friends', function(req,res){
        
        var diff =0;
        var friendMatch = {
            name:"",
            photo: "",
            
        }
    })
}