const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(args) {
  let result = 0
	for (let i = 0; i < args.length; i++) {
   result += args[i]
  //  console.log(result)
  }
  return result
};

const multiply = function(args) {
   let result = 1;
   for (let i = 0; i < args.length; i++) {
    result *= args[i]
   }
   return result
};

const power = function(num, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
   result *= num
   console.log(result)
  }
  return result
};

const factorial = function(num) {
let total = num;

if (num === 0) {
  total = 1
} else {
for (let i = num - 1; i > 0; i--){
  total = total * i
 }
}
return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
