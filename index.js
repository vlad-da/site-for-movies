
//переворот строки
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        console.log('error');
    } 
        const backStr = [];
        const newStr = str.split('');
        for (let i = 0; i < newStr.length; i++) {
            backStr[i] = newStr[newStr.length - i - 1];
        }
        const result = backStr.join('');
        console.log(result);
    
}

reverse(someString);

// Фибоначи
function fibo(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr[i] = i;
        if (i >= 2) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    const res = arr.join(' ');
    console.log(typeof(res));
}

fibo(3);

//Факториал - рекурсия
function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'error';
    } else if (n <= 0) {
        return 1;
    } else if ( n == 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial([]));