const fs = require('fs')
function namesScores(){
let text = fs.readFileSync('p022_names.txt','utf8');
let arr = text.split(",");
// console.log(arr[1][1])
let sum =0; 
let sum2 =0;
let obj = {
  "A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,
  "M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,
  "X":24,"Y":25,"Z":26
}
for(let i =0; i<arr.length;i++){
  let arr1 = arr[i];
  for(let i =1; i<arr1.length-1;i++){
     sum2 = sum2+ obj[arr1[i]];  
  }
  sum  =sum+ sum2 * (i+1);
  sum2 =0
 
}
return sum;
}
console.log(namesScores())




