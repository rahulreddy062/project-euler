function champernownesConstant(){
  let str = ''
  for(let i =1;i<=1000000;i++){
    str = str + i.toString()
  }
  return  str[0] * str[9] * str[99] * str[999] * str[9999] * str[99999]* str[999999]; 

}
console.log(champernownesConstant())
