// Array
// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW', 'Volvo');
console.log(cars);

// 배열 속성
console.log(fruits.length, cars.length);

// 메소드
// 1. concat()
let newFruits = fruits.concat('orange', 'mango');
console.log(newFruits);                         // [ 'apple', 'banana', 'cherry', 'orange', 'mango' ]

// 2. join() : Array를 하나의 String으로 펼쳐주는 역할
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);
// 내가 갖고 싶은 차는 Audi, Benz, BMW, Volvo 입니다.

// 3. pop()* - * : 파괴적 메소드
console.log(cars.pop());                        // 맨 끝에서 꺼낸 값을 위에 찍음
console.log(cars);

// 4. push()*
cars.push('Hyundai');
console.log(cars);                              // 맨 마지막에 추가함, [ 'Audi', 'Benz', 'BMW', 'Hyundai' ]

// 5. reverse()*
cars.reverse();
console.log(cars);                              // 순서를 바꿈, [ 'Hyundai', 'BMW', 'Benz', 'Audi' ]

// 6. slice() (= substring)
let germanyCars = cars.slice(1, 3);             // 시작 인덱스는 포함, 마지막 인데스는 포함하지 않음
console.log(germanyCars);                       // [ 'BMW', 'Benz' ]

// 7. sort()*
cars.sort();
console.log(cars);                              // [ 'Audi', 'BMW', 'Benz', 'Hyundai' ]
let numbers = [34, 56, 8, 29, 94, 46, 75];
// 오름차순 (ascending order)
numbers.sort();
console.log(numbers);

numbers.sort(function(a, b) {
    return a - b;                   // a - b : 오름차순 / b - a : 내림차순
});
console.log(numbers);

// 내림차순 (descending order)
numbers.sort(function(a, b) {
    return b - a;
})
console.log(numbers);

// 객체의 배열
let fruitArray = [
    {name: 'apple', price: 1000},
    {name: 'orange', price: 2000},
    {name: 'cherry', price: 3000}
];
// 이름의 오름차순
fruitArray.sort(function(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
});
console.log(fruitArray);
// 가격의 내림차순
fruitArray.sort(function(a, b) {
    return b.price - a.price;
})
console.log(fruitArray);

// 8. splice()*
let someFruits = fruits.splice(1, 3);
console.log(fruits);
console.log(someFruits);                // [ 'banana', 'cherry' ]

// isPalindrome()을 Array method를 이용하여 만들기
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}
console.log(isPalindrome('우영우'));    // true
console.log(isPalindrome('hello'));     // false
