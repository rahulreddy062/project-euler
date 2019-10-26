function evenFibonacciNumbers(){
let n1 = 1;
let n2 = 2;
let sum = 0;
while(n1 < 4000000) {
    if(n1%2===0) {
        sum += n1;
    }
    let  n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
}
return sum ; 
}
console.log(evenFibonacciNumbers())
