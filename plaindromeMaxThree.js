function palindrome(x){
  var a,no,b,temp=0;
  no=x;
  b=no;
  while(no>0)
  {
  a=no%10;
  no=parseInt(no/10);
  temp=temp*10+a;
  }
  if(temp==b)
  {
  return true;
  }
  else
  {
  return false;
  }
}
console.log(palindrome(234))
function maxThreePalindrome(x){
  let arr = [] 
  for(let i = 101 ;i<999;i++){
    for(let j =i; j<999;j++){
      let c= i*j;
      if(palindrome(c)){
        arr.push(c);
      }
    }
  }
return Math.max(...arr)
}
console.log(maxThreePalindrome())
