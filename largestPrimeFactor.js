let  leastPrime = 2;
let  numbertoFind = 600851475143;
while(numbertoFind > 1){
    if(numbertoFind % leastPrime === 0){ 
        numbertoFind /= leastPrime;
    } else {
        leastPrime++;
    }
}
console.log(leastPrime);
