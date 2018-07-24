var wordApp = angular.module("wordApp", []);

wordApp.controller('wordController', function($scope, $http) {

   $scope.words = {
     //placeholders.
      wordx: "mint",
      wordy: "axe",
      //update the word in the view.
      updateWords: function() {
         var wordObject;
         wordObject = $scope.words;
         return "Word x is: " +wordObject.wordx + ", and word y is: " + wordObject.wordy;
      },

    getData: function (){
      tweetData({wordx:$scope.words.wordx, wordy:scope.words.wordy});
    },

  //make pie using the data.
  makePie: function(){

    //placeholder data
    var data = [];
    data.push({"word":$scope.words.wordx, "tally":80});
    data.push({"word":$scope.words.wordy, "tally":70});

    var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(["#d0743c", "#ff8c00"]);

    var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.tally; });

    var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

    var label = d3.arc()
    .outerRadius(radius - 100)
    .innerRadius(radius - 100);

    var arc = g.selectAll(".arc")
      .data(pie(data))
      .enter().append("g")
      .attr("class", "arc");

      arc.append("path")
          .attr("d", path)
          .attr("fill", function(d) { return color(d.data.word); });

      arc.append("text")
          .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
          .attr("dy", "0.2em")
          .text(function(d) { return d.data.tally; });
  }
}

function tweetData(words){
  $http({
    method: 'GET',
    url: 'tweets',
    params: words
  }).then(function successCallback(response) {
    console.log(response);
    return response;
    }, function errorCallback(response) {
  console.log("It didn't work!");
    });
}
});
