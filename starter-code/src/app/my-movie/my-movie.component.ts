import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId:Number;
  constructor(private route: ActivatedRoute, private movieList:MoviesService) { }

  ngOnInit(){ 
  this.route.params.subscribe((params) => this.movieId = Number(params['id']));
 }


}
