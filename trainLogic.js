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
 var firstTrain = $("#first-train-time-input").val().trim();
 var frequency = $("#frequency-input").val().trim();

 // Creates local "temporary" object for holding train data
  var newTrain = {
      Train: train,
      Destination: dest,
      FirstTrain: firstTrain,
      Frequency: frequency
  };
// Uploads train data to the database
database.ref().push(newTrain);
// Logs everything to console
console.log(newTrain.Train);
console.log(newTrain.Destination);
console.log(newTrain.FirstTrain);
console.log(newTrain.Frequency);

alert("Train successfully added");

// Clears all of the text-boxes
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-time-input").val("");
$("#frequency-input").val("");

// Create the new row
//var newRow = $("<tr>").append(
    


});
//what happens when a new child is added
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
 console.log(childSnapshot.val());

 //Everything is stored in a variable
 var tName = childSnapshot.val().Train;
 var tDestination = childSnapshot.val().Destination;
 var tFirstTrain =  childSnapshot.val().FirstTrain;
 var tFrequency = childSnapshot.val().Frequency;

 var timeArr = tFirstTrain.split(":");
 var tTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
 var maxMoment = moment.max(moment(), tTime);
 var tMinutes;
 var tArrival;

 //if the first arrival time is after now, then send this to the arrive time

 if (maxMoment === tTime){
   tArrival = tTime.format("hh:mm A");
 }

});
