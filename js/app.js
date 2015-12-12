$(document).ready(function(){
var enterNumber = prompt("Enter a Number");
var convertNumber = +enterNumber;
var fizzBuzzFunc = function(){
	for(var n = 1; n < +convertNumber +1; n++){
		if((n % 3 === 0) && (n % 5 === 0)){
	document.write("Fizz Buzz " + "" + n + "");
	document.write("<br>");
	}
		else if(n % 3 === 0){
	document.write("Fizz " + "" + n + "");
	document.write("<br>");
	}
		else if(n % 5 === 0){
	document.write("Buzz " + "" + n + "");
	document.write("<br>");
	}
		else{
	document.write("" + n + "");
	document.write("<br>");
	}
}
};

if(isNaN(convertNumber)){
	prompt("Please enter a number only!");
}
else if(convertNumber % 1 !== 0)
{
	prompt("Please enter a whole number only!");
}
else{
	fizzBuzzFunc();
}

$("#numbers").append(fizzBuzzFunc());
});
