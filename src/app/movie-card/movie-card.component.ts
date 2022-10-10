import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from './../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie : Movie = {
    "adult": false,
    "id": 0,
    "original_language": "",
    "original_title": "",
    "overview": "",
    "popularity": 0,
    "poster_path": "",
    "release_date": "",
    "title": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  } ;

  @Output() triggerChangeInChild = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  handleClickOnMovieButton(){
    this.triggerChangeInChild.emit(this.movie.id)
  }
}
