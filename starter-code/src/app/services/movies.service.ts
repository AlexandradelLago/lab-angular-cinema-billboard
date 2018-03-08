import { Injectable } from '@angular/core';
import pelicula from '../../sample-movies';

@Injectable()
export class MoviesService {
     movies = pelicula;
    constructor() { }

    getMovies(){
        return this.movies;
    }
    getMovie(id){
       return  this.movies.find ( m =>  m.id === id );
    }
}