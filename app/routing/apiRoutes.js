var friends = require("../data/friends.js")

module.exports = function(app){

    //api GET req.
    app.get('/api/friends',(req,res) => {
        res.json(friends);
    })
    
    app.post('/api/friends', (req,res)=>{
        
        
        var diff =0;
        var friendMatch = {
            name:"",
            photo: "",
            difference: 10000
        }

        let submitdata = req.body;
        let usrName = userData.name;
        let usrScore = req.body.scores;

        for(var i=0; i<friend)
    })
}