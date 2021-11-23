 const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actots: {},
     genres: [],
     privat: false
 };

 const a = prompt('Один из последних просмотренных фильмов?', ''),
       b = prompt('На солько оцениваете его?', ''),
       c = prompt('Один из последних просмотренных фильмов?', ''),
       d = prompt('На солько оцениваете его?', '');

personalMovieDB.movies[a] = b;       
personalMovieDB.movies[c] = d;     

console.log(personalMovieDB)