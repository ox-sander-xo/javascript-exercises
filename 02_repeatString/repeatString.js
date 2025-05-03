const repeatString = function(str, num) {
let newStr = '';
if (num < 0) return 'ERROR'
else{
for (let i = 1; i <= num; i++) {
  newStr += str;
}
 console.log(newStr)
 return newStr
 }
};
console.log(repeatString('hey', 0))
// Do not edit below this line
module.exports = repeatString;
