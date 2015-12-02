$(document).ready(function(){
var number = 100;
	for(var n = 1; n < number +1; n++){
		if((n % 3 === 0) && (n % 5 === 0)){
			document.write("Fizz Buzz " + n);
			document.write("<br>");
		}
		else if(n % 3 === 0){
			document.write("Fizz " +  n);
			document.write("<br>");
		}
		else if(n % 5 === 0){
			document.write("Buzz " + n);
			document.write("<br>");
		}
		else{
			document.write(n);
			document.write("<br>");
		}
	}
});

