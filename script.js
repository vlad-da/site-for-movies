'use strict';

//1



//2

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмнов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGeners: function() {
       for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        if ( genre === '' || genre == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
        } else {
            personalMovieDB.genres[i - 1] = genre;
        }
       }

       personalMovieDB.genres.forEach((el, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${el}`);
       });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
