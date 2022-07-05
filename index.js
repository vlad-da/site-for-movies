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