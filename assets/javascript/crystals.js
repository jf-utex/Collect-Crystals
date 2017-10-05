//set base crystal value to 0 each cyrstal within an object
var crystal = {
  billy:
  {
    name: "bcrystal",
    value: 0
  },
  ball:
  {
    name: "crystalball",
    value: 0
  },
  gayle:
  {
    name: "crystalgayle",
    value: 0
  },
  light:
  {
    name: "crystallight",
    value: 0
  }
};
var crystalNum = 0;
var numWins = 0;
var numLosses = 0;
var counter = 0;
var crystalValue = 0;

//to get random number for each crystal
function getRandom (){
	var crystalNum = Math.floor((Math.random() * 12) + 1);
	return crystalNum;
}
function startGame(){
// GENERATES RANDOM NUMBER FOR PLAYER GOAL  math.random generates number between 0 and 1 to get a number between 0 and ten multiply by 10, math.floor rounds down to the nearest whole number

//targetNumber generates numbers from 19-120 for the player goal
 	targetNumber = (Math.floor(Math.random()*(120-19+1))+19);

	counter = 0;
//generates random numbers for each crystalValue by calling getRandom function
crystal.billy.value = getRandom();
crystal.ball.value = getRandom();
crystal.gayle.value = getRandom();
crystal.light.value = getRandom();

//log crystal objects with values as generated
console.log(crystal);

//prints the target number to the HTMl for user response
// document.getElementById("target").innerHTML=targetNumber;
// document.getElementById("your-score").innerHTML = counter;
$("#target").html(targetNumber);
$("#your-score").html(counter);
console.log("target:" + targetNumber);
}

var checkWin = function(){
	if (counter>targetNumber){
		alert ("Sorry, you lost");
		console.log("lost");

		numLosses++;

		$("#numLosses").html(numLosses);
		console.log(numLosses);
		startGame();
	}
	else if (counter === targetNumber){
		alert ("You Won!, Good Job");
		console.log("won");

		numWins++;

		$("#numWins").html(numWins);

		startGame();
	}
};

var addValues = function(clickedCrystal){
	counter += clickedCrystal.value;


	$("#your-score").html(counter);
	checkWin();
	console.log("your score:" + counter);

};

targetNumber = 0

startGame();
$("#bcrystal").click(function(){
	addValues(crystal.billy);
})
$("#crystalball").click(function(){
	addValues(crystal.ball);
})
$("#crystalgayle").click(function(){
	addValues(crystal.gayle);
})
$("#crystallight").click(function(){
	addValues(crystal.light);
});
