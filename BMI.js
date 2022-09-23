var readline = require("readline-sync");
var height = readline.question("Ur height?");
var weightlow = Math.round((Math.pow(height/100,2))*18.5) //18.5 lowest ,
var weighthight = parseInt((Math.pow(height/100,2))*24)   //24   hightest ,paresInt to ignore decimal places
console.log("Your ideal weight range is="+weightlow,("kg to ") +weighthight,("kg"));
