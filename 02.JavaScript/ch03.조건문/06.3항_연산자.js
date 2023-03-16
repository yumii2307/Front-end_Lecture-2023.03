// 조건 연산자, 3항 연산자
let num = 3;
let evenOdd = (num % 2 == 0) ? '짝수' : '홀수';  // (조건) ? '참일 때 값' : '거짓일 때 값' = 3항 연산자
console.log(`${num} 은/는 ${evenOdd}입니다.`);

let variable =3;
variable = (typeof(variable) == 'undefined') ? 0 : variable;
console.log(variable);
