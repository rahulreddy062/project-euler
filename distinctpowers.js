const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
const primes = Array.from(
  { length: 100 },
  (_, i) => i + 1
).filter(isPrime);

const addPrimesToObj = (num, prime, obj) => {
  while ((num / prime) % 1 === 0) {
    obj[prime] = (obj[prime] || 0) + 1;
    num = num / prime;
  }
  return num;
};
var main = function() {
  const factorsSet = new Set();
  for (let a = 2; a <= 100; a++) {
    for (let b = 2; b <= 100; b++) {
      const theseFactors = {};
      for (let i = 0; i < b; i++) {
        let innerA = a;
        primes.forEach((prime) => {
          innerA = addPrimesToObj(innerA, prime, theseFactors);
        });
      }
      const factorsStr = Object.entries(theseFactors)
        .map(([key, val]) => `${key}-${val}`)
        .join('_');
      factorsSet.add(factorsStr);
    }
  }
  return factorsSet.size;
}

console.log(main());
