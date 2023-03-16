// 자바스크립트의 자료형
// 1. 숫자(number)
console.log(5 / 2);
console.log(5 % 2);     // modulo, 나머지 계산 * 중요 : 배수, 약수(num) 판단 
console.log(2 ** 10);   // 2의 10제곱, 1024
console.log(1.3e-8);     // 1.3 x 10 ** -8

// 2. 문자열(string)
console.log('She said "I love you" ');
console.log("She said \"I love you\" ");
console.log('She\tsaid\n "I love you" ');   // '\t' : 'tab' / '\n' : '줄바꿈'
console.log('\\ Back slash(\\) 기호를 사용할 떄는 \\ 두개를 쓰면 됩니다.');
let hello = '안녕하세요?';
console.log(hello[0], hello[5]);    // 시작은 0부터 ( * R은 1부터 )
// template literal(`)
let a = 2, b = 3;
console.log(a, '더하기', b, '을 한 결과는', 2 + 3, '입니다.');  // , 대신 + 를 쓸 경우, 값이 공백 없이 문자열로 나타나게 됨
console.log(`${a} 더하기 ${b}을 한 결과는 ${2 + 3} 입니다.`);
console.log(`She said "I love you"`);
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`);

// 3. 논리형(boolean)
console.log(typeof(true), typeof false);    // boolean
console.log(2 == 2.0, 5 >= 4, !('가나다' > '마바사'));  // == : '같다' / 한글은 사전 순서 (ㄱ, ㄴ, ㄷ ... ㅎ) / ! : '부정'
let x = 10;
console.log(x > 8 || x < -3);      // x > 8 또는 x < -3
console.log(x >= 0 && x <= 5);     // 0 <= x <= 5
console.log(true > 10);     // true 가 1로 자동 변환되어 비교가 됨 ( false 는 0 )
