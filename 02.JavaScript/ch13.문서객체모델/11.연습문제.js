function ans1 () {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    if (num1 < 0 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {
        alert('입력값의 범위를 확인하고 다시 입력하세요.');
        return;
    }
    let powerArr = [];
    for (let i = num1; i <= num2; i++)
        powerArr.push(2 ** i);
    let resultStr = '';
    /* for (let element of newPrices)
        resultStr += element + '<br>'; */
    for (let i = 0; i < powerArr.length; i++) {
        if ((i + 1) % 4 == 0)
            resultStr += powerArr[i] + '<br>';
        else
            resultStr += powerArr[i] + ', ';
    }
    document.getElementById('result1').innerHTML = powerArr;
}
function ans2() {
    let text = document.getElementById('sentence').value;
    let noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ').toLowerCase();
    let words = noPunct.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == 'the')
        count++;
    }
    document.getElementById('result2').innerHTML = `the의 갯수는 ${count} 입니다.`;
}
function ans3() {
    let priceStr = document.getElementById('price').value;
    let prices = priceStr.split(';');           // prices는 배열, element는 string
    // price의 각 요소를 정수로 변환
    let newPrices = [];
    for (let price of prices)
        newPrices.push(Number(price));
    // let newPrices = prices.map(function(x) {return parseInt(x)});
    // let newPrices = prices.map(x => parseInt(x));
    newPrices.sort(function(a, b) {
        return b - a;               // 내림차순 정렬
    });
    let resultStr = '';
    for (let element of newPrices)
        resultStr += element + '<br>';
    document.getElementById('result3').innerHTML = `resultStr`;
}