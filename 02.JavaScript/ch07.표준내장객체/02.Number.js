// Number 객체

let numberFromLiteral = 273;
let numberFromConstructor = new Number(273);

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());
console.log(pi.toFixed(5));         // 5개 밑으로 버린다
console.log(pi.toPrecision(3));     // 유효숫자를 세자리로

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
console.log(Math.pow(2,53) - 1);            //Number.MAX-SAFE-INTEGER