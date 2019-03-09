function clearDisplay(){
	var displayText=document.getElementById("display");
	displayText.value="";
}

function displayResults(){
	
	var expression=document.calculator.display.value;
	var result=eval(expression);
	document.calculator.display.value=result;
}

function deleteNumbers(){
	var expression=document.calculator.display.value;
	var newResult=expression.substr(0, expression.length - 1);
	document.calculator.display.value=newResult;
}

function addToScreen(x){
	var displayText=document.getElementById("display")
	displayText.value+=x;
}