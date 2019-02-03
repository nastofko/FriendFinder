var friends = require('../data/friends');

module.exports = function (app) {

    app.get('/api/home', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        let userInput = req.body;

        let userChoices = userInput.scores;

        let matchName = '';
        let matchImage = '';
        let totalDifference = 8000;

        for (let i = 0; i < friends.length; i++) {

            let dif = 0;
            console.log(i);
            for (var y = 0; y < userChoices.length; y++) {
                dif += Math.abs(friends[i].scores[y] - userChoices[y]);
            }

            if(dif < totalDifference){
                console.log('Closest match = ' + dif);

                totalDifference = dif;
                matchName = friends[i].name;
                matchImage = friends[i].photo;

            }


        }


        friends.push(req.body);
        console.log(friends);
        res.json({matchName: matchName, matchImage: matchImage});
    });


}

// put in post the match making code