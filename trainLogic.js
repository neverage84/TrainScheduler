//1. Initialize Firebase
var config = {
    apiKey: "AIzaSyC3cE0HGujnBcGoAdvvuvGf8pXK54KJzAs",
    authDomain: "click-counter-9995c.firebaseapp.com",
    databaseURL: "https://click-counter-9995c.firebaseio.com",
    storageBucket: "click-counter-9995c.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Trains

$("#add-train-btn").on("click",function(event) {
 event.preventDefault();

 //Grabs user Input
 var train = $("#train-name-input").val().trim();
 var dest = $("#destination-input").val().trim();
 var firstTrain = moment($("#first-train-time-input").val().trim(), "HH:mm").format("X");
 var frequency = moment($("#frequency-input").val().trim(), "mm").format("X");

 // Creates local "temporary" object for holding employee data
  var newTrain = {
      Train: train,
      Destination: dest,
      FirstTrain: firstTrain,
      Frequency: frequency
  };
// Uploads employee data to the database
database.ref().push(newTrain);
// Logs everything to console
console.log(newTrain.Train);
console.log(newTrain.Destination);
console.log(newTrain.FirstTrain);
console.log(newTrain.Frequency);

alert("Train successfully added");

// Clears all of the text-boxes


});
