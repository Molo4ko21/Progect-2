 const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actots: {},
     genres: [],
     privat: false
 };

 
for (let i=0; i <2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На солько оцениваете его?', '');

    if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console. log('Erorr');
        i--;
    }     
}

if (personalMovieDB.count < 10 ) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else  if (personalMovieDB.count >=30) {
    console.log('Вы Киноман');
} else {
    console.log('Поизошла ошибка');
}

console.log(personalMovieDB);