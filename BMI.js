var readline = require('readline-sync');    

var height = readline.question("what's your height(cm)?");
console.log("your height:"+height);
var weight = readline.question("what's your weight?");
console.log("your height:"+weight);

var BMI = weight/(math.pow(height/100,2));
console.log("your BMI is:"+BMI);