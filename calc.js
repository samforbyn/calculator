const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokesn[3]);

	console.log('mathSymbol', mathSymbol)
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol == "-") {
		let answer = num1 - num2 - num3
		console.log(`The answer is ${answer}`)
	} else if (mathSymbol == "+"){
		let answer = num1 + num2 + num3
		console.log(`The answer is ${answer}`)
	} else if (mathSymbol == "/"){
		let answer = num1 / num2 /num3
		console.log(`The answer is ${answer}`)
	} else if (mathSymbol == "*"){
		let answer = num1 * num2 * num3
		console.log(`The answer is ${answer}`)
	} else if (mathSymbol == "sqrt"){
		let answer = Math.sqrt(num1)
		console.log(`The square root of ${num1} is ${answer}`)
	} else if (mathSymbol == "sq"){
		let answer = num1 * num1
	 	console.log(`${num1} squared is ${answer}`)
	} else if (mathSymbol == "%"){
		let answer = num1 % num2
		console.log(`${num1} divided by ${num2} will have a remainder of ${answer}`)
	} else if (mathSymbol == "cube"){
		let answer = num1 * 3
		console.log(`${num1} cubed is ${answer}`)
	}else if (mathSymbol == "^"){
		let answer = Math.pow(num1, num2)
		console.log(`${num1} to the power of ${num2} would be ${answer}`)
	}
		
		
	// This line closes the connection to the command line interface.
	reader.close()

});
