function isPrime(x){
  for(let i =2;i<x;i++){
    if(x%i==0){
      return false; 
    }
  }
  return true;
}
console.log(isPrime(10003))
function tenthousandonePrime(){
  let count = 1;
  let i =0;
  while(i<10001){
    count++;
    if(isPrime(count)){
    i++;
    }
  }
  return count ;
}
console.log(tenthousandonePrime())
