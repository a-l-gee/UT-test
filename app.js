const express = require('express');
const app = express();
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile('index.html');

});

 app.get("/tweets", function(req, res){
  var Twit = require('twit');

  //authentication

  var T = new Twit({
    consumer_key:         'HGSD8jhsw5DyABatZE11ERzK2',
    consumer_secret:     'vDgf0xi53fXS0LfZS1w7D2p4U5cuWYGp4b4iY4luQ9Zk4h0yi1',
    access_token:         '1021382707375497218-yOUhXXF2k0qGmOtydW756wmcDMpPTG',
    access_token_secret:  'yADhytWS4WoN0TRgITxDacT7BfXZJw01mLa4pp77Yx05Y',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  });

  // Reponse to send to angularJS to update the data.
  var response = {};

  // Filter stream for the first word. Add to tally with each found tweet.
  var streamx = T.stream('statuses/filter', { track: req.wordx});
  streamx.on('tweet', function (tweet) {
    response[req.wordx] += 1;
    console.log("tweet for "+req.wordx);
  })

  //Filter stream for the second word.Add to tally with each found tweet.
  var streamy = T.stream('statuses/filter', { track: req.wordy });
  streamy.on('tweet', function (tweet) {
    response[req.wordy] += 1;
    console.log("tweet for "+req.wordy);
  })

  console.log(response);
  res.send(response)
})

app.listen(8080);
console.log("App listening on port 8080");
