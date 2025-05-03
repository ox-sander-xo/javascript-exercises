const reverseString = function(str) {
 const letters = str.split("");
 console.log(letters);
 let reversedArray = [];
  for (let i = letters.length; i > 0; i--) {
  const popped = letters.pop();
  reversedArray.push(popped)
  console.log(reversedArray)
 }
 return reversedArray.join("")
 console.log(reversedArray)
};

// Do not edit below this line˜˜
module.exports = reverseString;
