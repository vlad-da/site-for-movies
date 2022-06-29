/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

//1

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

//2

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB.count);

//3
for (let i = 0; i < 2; i++) {
    let firstLastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        firstGrade = prompt('На сколько оцените его?', '');
    if (firstLastFilm != null && firstLastFilm != '' && firstLastFilm.length < 50 && 
        firstGrade != null && firstGrade != '') {
        personalMovieDB.movies[firstLastFilm] = firstGrade;
    } else {
        console.log('lol');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмнов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('error');
}

console.log(personalMovieDB);
