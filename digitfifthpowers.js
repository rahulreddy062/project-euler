function digitfifthPowers(){
  let sum =0 
  for(let i =10;i<=354294;i++){
    if(i===digitsPower(i)){
      sum = sum + i ; 
    }
    
  }
  return sum;
}
function digitsPower(x){
  let sum =0 ;
  while(x>0){
    sum = sum + Math.pow(x%10,5);
    x = x/10 | 0;
  }
  return sum ; 
}
console.log(digitfifthPowers())
