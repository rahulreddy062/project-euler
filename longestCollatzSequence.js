function longestCollatzSequence(x){
  let count =1 ; 
  let no = x ; 
  while(no>1){
    if(no%2===0){
      no /= 2;
      count = count + 1; 
     
    }
    else{
      no = (3*no)+1;
      count = count + 1; 
      
    }
  }
  return count 
}
function length(){
  let max = 0 ; 
  let max_val = 0;
  for(let i =1;i<1000000;i++){
    let c = longestCollatzSequence(i);
    if(c>max){
      max = c; 
      max_val = i ; 
    }
  }
  return max_val
}
console.log(length())
