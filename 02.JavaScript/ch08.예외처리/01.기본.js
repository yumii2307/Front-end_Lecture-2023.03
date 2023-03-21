// error.error.error();

try {                                   // 예외처리 : try, catch 로 묶는 것
    error.error.error();
} catch (e) {
    console.log(e.name);
    console.log(e.message);             // error 이름이나 원인을 체크한다
}

console.log('This is end.');