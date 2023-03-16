// 생일 - 오늘 현재 만나이 계산
const bYear = 2000, bMonth = 3, bDay = 20;
const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();
console.log(tYear, tMonth, tDay);

let Age = (tYear - bYear);

if (tMonth > bMonth) {
    if (tMonth == bMonth && tDay < bDay) {
        console.log(`만 ${Age - 1}세 입니다`);
    } else {
     (tMonth == bMonth && tDay >= bDay);
        console.log(`만 ${Age}세 입니다`);
    }
}