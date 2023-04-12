// У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме. 
 
const getHypothesis = (a, b) => {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

const k = getHypothesis (3, 4);

console.log(k);