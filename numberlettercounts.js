function numberLetterCounts(){
  let str = '';
  let obj = {
    1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",
    8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",
    14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",
    19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",
    70:"seventy",80:"eighty",90:"ninety",100:"onehundred", 200:"twohundred",
    300:"threehundred",400:"fourhundred",500:"fivehundred",600:"sixhundred",
    700:"sevenhundred",800:"eighthundred",900:"ninehundred",1000:"thousand"
  }
  for(let i =1;i<=1000;i++){
    if(i<=10){
      str = str + obj[i];
    }
    if(i>10&&i<=20){
      str = str + obj[i]
    }
    if(i>20&&i<=99){
      str = str + obj[parseInt((i.toString().substring(0,1)).split(''))*10] 
      if(i%10!=0){
      str = str + obj[parseInt((i.toString().substring(1,2)).split(''))]
      }
    }
    if(i===100){
      str = str + obj[i]
    }
    if(i>100&&i<=999){
      str = str + obj[parseInt((i.toString().substring(0,1)).split(''))*100]  
      if(parseInt((i.toString().substring(1,2)).split(''))!=0&&parseInt((i.toString().substring(1,2)).split(''))!=1&&parseInt((i.toString().substring(2,3)).split(''))!=0&&parseInt((i.toString().substring(-1)).split(''))!==0) {
      str =  str+'and'+obj[parseInt((i.toString().substring(1,2)).split(''))*10]  +  obj[parseInt((i.toString().substring(2,3)).split(''))]
      }
      else if(parseInt((i.toString().substr(-1)).split(''))===0&&(parseInt((i.toString().substr(1,2)).split('')))!==0){
        str = str +'and'+obj[parseInt((i.toString().substring(1,2)).split(''))*10]
      }
      else if(parseInt((i.toString().substring(1,2)).split(''))===1){
        str = str + 'and'+ obj[(parseInt((i.toString().substring(1,2)).split('')))*10+(parseInt((i.toString().substr(-1)).split('')))]
      }
      else if(parseInt((i.toString().substring(1,2)).split(''))===0&&(parseInt((i.toString().substr(-1)).split('')))!==0){
        str = str + 'and'+obj[(parseInt((i.toString().substr(-1)).split('')))]
      }
     
      }
      else if(i===1000){
        str = str + obj[i];
      }
    

  }
  return str.split('').length;
}
console.log(numberLetterCounts())
