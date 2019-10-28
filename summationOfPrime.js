function isPrime(x){
  for(let i =2;i<=Math.sqrt(x);i++){
    if(x%i==0&&x!=i){
      return false; 
    }
  }
  return true;
}
console.log(isPrime(6))
function summationofPrime(){
  let sum =0;
  for(let i = 2; i<2000000;i++){
    if(isPrime(i)){
      sum  = sum + i;
    }
  }
  return sum 
}
console.log(summationofPrime())
