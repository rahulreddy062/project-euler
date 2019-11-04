function pandigitalPrime(){
  let max = 0 ; 
  let arr = [] ;
  let arr2 = [] ;
  for(let i = 2143;i<987654321;i++){
    if(isPrime(i)){
      console.log(i);
      arr.push(i)
    }
  }
  for(let i =0;i<arr.length;i++){
    if(pandigitalNumber(i)){
      arr2.push(i)
    }
  }
  return Math.max(...arr2);

}
function pandigitalNumber(x){
  let arr = [1,2,3,4,5,6,7,8,9];
  let arr2 = [ ]
  let y =x; 
  let arr3 = [] 
  while(x>0){
    y = x%10;
    x = Math.floor(x/10);
    arr2.push(y);
  }  
  arr3 = arr2.sort();
  // console.log(arr3);
  for(let i =0;i<arr.length;i++){
    if(arr[i]!==arr3[i]){
      // console.log(arr3[i])
      return false
    }
  }
  return true;
}
console.log(pandigitalNumber(26509099))
function isPrime(x){
  for(let i=2; i<=Math.sqrt(x);i++){
    if(x%i===0){
      return false; 
    }
  }
  return true
}
console.log(pandigitalPrime());
