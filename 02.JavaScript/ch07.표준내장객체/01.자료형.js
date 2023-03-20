// 기본 자료형 - primitive type
let number = 273.14;
let string = 'Hello';
let boolean = true;
console.log(typeof(number), typeof(string), typeof(boolean));

// 객체 자료형 - 기본자료형을 객체로 만든 것을 Wrapper class 라 불림
let numObj = new Number(273.14);
let strObj = new String('Hello');
let boolObj = new Boolean(true);
console.log(typeof(numObj), typeof(strObj), typeof(boolObj));

console.log(number == numObj, number === numObj);       // === : 값, 자료형 모두 일치할 때 쓰는 일치연산자

let fruits = '사과, 딸기, 바나나';
console.log(fruits.split(','));