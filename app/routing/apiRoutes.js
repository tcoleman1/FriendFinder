 let friends = require("../data/friends")

function apiRoutes(app){

    //api GET req.
    app.get("/api/friends",(req,res) => {
        res.json(friends);
    })
    
    app.post("/api/friends", (req,res)=>{
        

        // var diff =0;
        // var friendMatch = {
        //     name:"",
        //     photo: "",
        //     difference: 10000
        // }

        // let submitdata = req.body;
        // let usrName = userData.name;
        // let usrScore = req.body.scores;

        let newFriend ={
            name: req.body.name,
            photo: req.body.photo,
            scores:[]
        }

        let scoresArr = [];

        for(var i=0; i< req.body.scores.length; i++){
            scoresArr.push(parseInt(req.body.scores[i]))
        }

        newFriend.scores = scoresArr;

        let compareScoreArr = [];
        for(var i=0; i<friends.length;i++){

            let currentComparison = 0;
            for(var k=0; k < newFriend.scores.length; k++){
                currentComparison += Math.abs(newFriend.scores.length[k] - friends[i].scores[k])
            }

            compareScoreArr.push(currentComparison)
        }

        // finding match for friend depending on array


       let match =0;
       for(var i=1; i<compareScoreArr.length; i++){
           if(compareScoreArr[i] <= compareScoreArr[match]){

            match = i;
           }
       }

       let friendsMatch = friends[match];
       res.json(friendsMatch);

       //push the new friend into the friends array

       friends.push(newFriend)
       
       
} 
    )}

module.exports = apiRoutes;

