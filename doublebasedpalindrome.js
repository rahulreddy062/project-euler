function palindrome(n){
  let rem,temp,final =0;
  temp = n;
  while(n>0){
    rem = n%10;
    n = parseInt(n/10);
    final = final*10+rem;
  }
  if(final===temp){
    return true; 
  }
  else {
    return false;
  }
}
function dec2bin(dec){
  return parseInt((dec >>> 0).toString(2));
}
function doublebasePalindromes(){
  let sum =0 ; 
  for(let i =1;i<1000000;i++){
    if(palindrome(i)&&palindrome(dec2bin(i))){
      
      sum = sum + i;
    }
   
  }
  return sum ; 
}

console.log(doublebasePalindromes())
