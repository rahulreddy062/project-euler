function multiplesofThreeandFive(){
    let sum = 0 ; 
    for(let i =0;i<10;i++){
    if(i%3===0 || i%5===0){
      sum = sum+i;
    }

    }
    return sum ;
}
console.log(multiplesofThreeandFive())
