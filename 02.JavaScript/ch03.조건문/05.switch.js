// switch - multi select
let score = 84;
let scoreDigit = parseInt(score / 10);    // 10으로 나눈 몫, 정수 값
let grade;

switch(scoreDigit) {
    case 10:
    case 9:
        grade = 'A'; break;     // switch 다음에는 break를 반드시 넣어야 함. default 값이 됨.
    case 8:
        grade = 'B'; break;
    case 7:
        grade = 'C'; break;
    case 6:
        grade = 'D'; break;
    default:
        grade = 'F';
}
console.log(`성적: ${score}, 학점: ${grade}`);
