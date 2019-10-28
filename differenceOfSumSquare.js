function sumsquareDifference(){
  let sumsquares = 0;
  let squaresum = 0 
for(let i =1;i<=100;i++){
  sumsquares = sumsquares+i*i
}
squaresum = (100*101/2)**2
let difference = squaresum - sumsquares;
return difference;

}
console.log(sumsquareDifference())
