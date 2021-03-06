import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootMovies, Movie } from '../sw-interfaces';
import { SwUrlService } from '../../samples/sw-url.service';

@Injectable()
export class SimpleFilmsService2 {

  constructor(private http: HttpClient, private swUrlService: SwUrlService) {}

  getFilms() {
    return this.http.get<RootMovies>(this.url);
  }

  get url() {
    return this.swUrlService.url;
  }

  add(movie: Movie) {
    return this.http.post(this.url, movie);
  }

}
