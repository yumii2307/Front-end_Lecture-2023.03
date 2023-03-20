// 1. 구구단
let dan = parseInt(Math.ceil(Math.random() * 8) + 1);
for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan*i}`);
}

// 2. 알람시계
let hour = 0, minute = 20;
let newHour, newMin;
if (minute >= 45) {
    newHour = hour;
    newMin = minute - 45;
} else {
    newHour = (hour + 24 - 1) % 24;     // % : 모듈
    newMin = minute + 60 - 45;
}

console.log(`${newHour}시 ${newMin}분`);

// 3. 주사위
let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));

let prize = 0;
if (dice1 == dice2 && dice1 == dice3) {
    prize = 10000 + dice1 * 1000;
} else if (dice1 == dice2 || dice1 == dice3) {
    prize = 1000 + dice1 * 100
} else if (dice2 == dice3) {
    prize = 1000 + dice1 * 100
// } else if (dice1 == dice3) {
//     prize = 1000 + dice1 * 100
} else {
    let maxVal = (dice1 > dice2) ? dice1 : dice2;
    maxVal = (maxVal > 3) ? maxVal : dice3
    prize = maxVal * 100;
}
console.log(`${dice1}, ${dice2}, ${dice3} prize : ${prize}원`);