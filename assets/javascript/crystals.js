



alert("joined");

	var targetNumber = (Math.floor(Math.random()*(120-19+1)+19));  <!-- //math.random generates number between 0 and 1 to get a number between 0 and ten multiply by 10, math.floor rounds down to the nearest whole number -->

	$("#target").html(targetNumber);
	var counter = 0;
	var numberOptions = Array.from({length: 4}, () => Math.floor(Math.random() * 12));
 		// how can I print out what the array is set to to check these numbers?

for(var i = 0; i < numberOptions.length; i++){

	var imageCrystal = $("<img>");
	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("src","assets/images/crystal1.jpeg");
	imageCrystal.attr("data-crystalvalue", numberOptions[i]);

	$("#crystals").append(imageCrystal);
}

//var numberIndex = Math.floor(Math.random()*2);  //picks a number between 0 and almost 1 multiplies by 2
//var increment = numberOptions[numberIndex]; //set previous line to index

$(".crystal-image").on("click", function(){
	
	var increment = $(this).attr("data-crystalvalue")
	counter += parseInt(increment);//parseInt will take a value and turn a string into an integer
	

	alert("You have accumulated " + counter + " points!");
	

	if(counter == targetNumber){
		// need counter here to add number of wins to print at wins
		alert ("You Won!");
	}else if (counter > targetNumber){
		 // fneed a counter here to add number of losses to print for losses
		alert("You Lose!");
	}	
});