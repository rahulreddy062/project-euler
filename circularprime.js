//Erastosthenes sieve
function findPrimes(range) {
  var numbers = [1];
  var prime = 2;
  var primesArr = [2]

  //Stop searching once prime is as big as range
  while(prime < range) {
      //Fill var numbers all mulitipes of prime
      for(var i = 1; i <= range && prime * i <= range ; ++i) {
          numbers[prime * i - 1] = prime * i;
      }
      //Move onto the next prime
      while(numbers[prime-1] !== undefined) {
          ++prime;
      }
      //Add current prime to the array
      primesArr.push(prime);
  }
  //Delete the last prime which is bigger than range
  primesArr.pop();
  return primesArr;

}
//Find primes within range which are circular primes
function findCircularPrimes(range) {
    //Generate array of primes from findPrimes array
    var primes = findPrimes(range);
    var circularPrimes = [];
    //Loop through each of the primes
    for(var i = 0; i < primes.length; ++i) {
        //Split current prime into an array
        var numArr = primes[i].toString().split('');
        var truefalse = true;
        //Cycle through each of the digits and check if its a prime (and therefore a member of primes)
        for (var j = 0; j < numArr.length; ++j) {
            numArr.push(numArr.shift());
            //If current rotation is not a prime break the loop and 'return' false
            if (primes.indexOf(Number(numArr.join(''))) === -1) {
                truefalse = false;
                break;
            }
        }
        //If truefalse variable is true add circular prime to array
        if(truefalse) {
            circularPrimes.push(primes[i]);
        }

    }

    return circularPrimes;
}
