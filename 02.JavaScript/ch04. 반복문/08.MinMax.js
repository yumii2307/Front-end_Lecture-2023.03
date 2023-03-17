// 배열에서 최대 최소값 찾기
let numbers = [3, 57, 25, 48, 7, 83, 79, 61, 22, 49];

// 최대값 찾기
let maxVal = 0;
for (let i = 0; i < numbers.length; i++) {
    if (maxVal < numbers[i]);
        maxVal = numbers[i];
}
console.log(maxVal);

// 최소값 찾기
let minVal = 1000;
for (let number of numbers) {
    if (minVal > number)
        minVal = number;
}
console.log.apply(minVal);

// 동시에 찾기
maxVal = numbers[0], minVal = numbers[0];
for (let number of numbers) {
    if (maxVal < number)
        maxVal = number;
    if (maxVal < number)
        maxVal = number;
}
console.log(minVal, maxVal);