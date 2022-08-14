
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
function fib(num) {
    if (!Number.isInteger(num) || num < 0) {
        return '';
    } else {
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
    
}

fib(3);

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

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// возвращает массив объектов
function showGoodFilms(arr) {
    const film = arr.filter(item => item.rating >= 8);
    return film;
}


// возвращать будет строку, которая содержит названия фильмов через запятую.
function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item.id = i;
        return item;
    });
}

// const tranformedArray = setFilmsIds(films);

//возвращает true, если у всех есть id
function checkFilms(arr) {
    const newArr = arr.every(item => item.id || item.id === 0 ? true : false);
    return newArr;
}

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

//возвращает сумму только положительных значений из каждого объекта
const getPositiveIncomeAmount = (data) => {
    const newF = data.filter(item => item.amount > 0).reduce((sum, curr) => sum + curr.amount, 0);
    return newF;
};

const getTotalIncomeAmount = (data) => {
 return data.some(item => (item.amount < 0)) ? data.reduce((sum, curr) => sum + curr.amount, 0) : getPositiveIncomeAmount(data);

};

getTotalIncomeAmount(funds);