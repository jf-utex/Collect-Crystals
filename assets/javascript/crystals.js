alert ("connected");

var targetNumber = (Math.floor(Math.random()*(120-19+1))+19);  
// GENERATES RANDOM NUMBER FOR PLAYER GOAL  math.random generates number between 0 and 1 to get a number between 0 and ten multiply by 10, math.floor rounds down to the nearest whole number 

// generates random number integers for the crystal
var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12));
console.log(numberOptions);
 // how can I print out what the array is set to to check these numbers?

// var numWins=0;
// var numLosses=0;
// var counter=0;


document.getElementById("target").innerHTML=targetNumber;  



for(var i = 0; i < numberOptions.length; i++){

	var imageCrystal = getElementById("bcrystal");
	imageCrystal.setAttribute("data-crystalvalue", numberOptions[i]);

	crystals.appendChild(imageCrystal);
   
 }
for(var i = 0; i < numberOptions.length; i++){

	var imageCrystal = getElementById("crystalball");
	imageCrystal.setAttribute("data-crystalvalue", numberOptions[i]);

	crystals.appendChild(imageCrystal);
}
for(var i = 0; i < numberOptions.length; i++){

	var imageCrystal = getElementById("crystalgayle");
	imageCrystal.setAttribute("data-crystalvalue", numberOptions[i]);

	crystals.appendChild(imageCrystal);
}
for(var i = 0; i < numberOptions.length; i++){

	var imageCrystal = getElementById("crystallight");
	imageCrystal.setAttribute("data-crystalvalue", numberOptions[i]);

	crystals.appendChild(imageCrystal);
}
// loop to place individual crystal with individual random number?

// var numberIndex = Math.floor(Math.random()*2);  //picks a number between 0 and almost 1 multiplies by 2


	crystal-image.on("click",function(){

	var arrayNumber=this.getAttribute('value');
	numberOptions[parseInt(arrayNumber)];
		//grabs spot in array as assigned on html and converts string to integer.  this will need to be added to counter
	
	var increment = (this).attr("data-crystalvalue"); 
	counter += parseInt(increment);//parseInt will take a value and turn a string into an integer
	//var increment = numberOptions[numberIndex]; //set previous line to index

	alert("You have accumulated " + counter + " points!");
	

	if(counter == targetNumber){
		// need counter here to add number of wins to print at wins
		alert ("You Won!");
		
	}else if (counter > targetNumber){
		 // need a counter here to add number of losses to print for losses
			alert ("You Lose!")};
});

// document.getElementById(numWins).innerHTML = 
// document.getElementById(numLosses).innerHTML = 
