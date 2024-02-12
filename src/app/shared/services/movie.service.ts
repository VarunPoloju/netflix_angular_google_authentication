import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const options = { //our wish u can whatever you want, this options need to use whenever makin api call
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headerss: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzZmOWVlYTljOTc4NWVkNDdiN2JiYzRmMjExMDc1YyIsInN1YiI6IjY1YzIwNGI5ZjQ0ZjI3MDE2M2MwYmRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tHvPOziN0y7ysmPN2ZpbGhWQU9qTpCAZYeEVS6J_YY'
    //this token is provided by tmdb website check note for more nformation
  }
}



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  http = inject(HttpClient);

  getMovies() {
    //before calling api we need to create options as above
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }
  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }




  getRatedMovies() {  //issue
    return this.http.get('https://api.themoviedb.org/3/account/20971291/rated/movies?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }

  getBannerImage(id: number) {  //issue
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {  //issue
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) { //issue
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=676f9eea9c9785ed47b7bbc4f211075c', options)
  }



}

