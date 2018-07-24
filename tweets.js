var Twit = require('twit');
var T = new Twit({
  consumer_key:         'T4xL2FHbyoWcTabDLevPmBR6B',
  consumer_secret:     'h4DBDbjW4bKfi40EtlHyWxFGp41HGqO36nTyJxWzp74b1wbWRt',
  access_token:         '1021382707375497218-yOUhXXF2k0qGmOtydW756wmcDMpPTG',
  access_token_secret:  'yADhytWS4WoN0TRgITxDacT7BfXZJw01mLa4pp77Yx05Y',
  timeout_ms:           60*1000,
  strictSSL:            true,

//Stream for word x.
var stream = T.stream('statuses/filter', { track: "mint"});
var tallyx = 0;
stream.on('tweet', function (tweet) {
    tallyx += 1.
    console.log("Another tweet for mint. That's "+tallyx+" tweets." );
})

//Stream for word y.
var stream = T.stream('statuses/filter', { track: "axe" });
var tallyy = 0;
stream.on('tweet', function (tweet) {
  tallyy+=1;
  console.log("Anoher tweet for axe. That's "+tallyy+" tweets.");
});
