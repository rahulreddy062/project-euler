function pythagoreanTriplet(){
  let triplet = 0;
  for(let i =0;i<1000;i++){
    for(let j =0;j<1000;j++){
      for(let k =0;k<1000;k++){
        if((Math.pow(i,2)+Math.pow(j,2)===Math.pow(k,2))&&((i+j+k)===1000)&&(i<j&&i<k&&j<k)){
          triplet = i * j * k ;
          console.log(i);
          console.log(j);
          console.log(k);
          
        }
      }
    }    
  }
  return triplet;
}
console.log(pythagoreanTriplet())
