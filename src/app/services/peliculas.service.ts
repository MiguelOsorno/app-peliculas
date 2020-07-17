import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  private apiKey: string = 'aqui va la clave';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  public peliculas = [];

  constructor( private http: HttpClient) { }


  getPopulares(){

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.get( url );

  }

  getPopularesKids(){
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get( url );
  }


  buscarPeliculas(texto: string){
    let url = `${this.urlMoviedb}/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
 
    //let  url = `${this.urlMoviedb}/search/multi?query=${ texto }&api_key=${this.apiKey}&language=es`;
    //let url = `${this.urlMoviedb}/search/tv?query=${ texto }&api_key=${this.apiKey}&language=es`
    return this.http.get( url );
  }

  buscarPelicula( id: number){
    //let url = `${this.urlMoviedb}/movie/query=${id}?api_key=${this.apiKey}&language=es`;
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es`;
    return this.http.get( url );
  }

  getCarteleta(){
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate( hasta.getDate() +  7);
    
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()}-${hasta.getDate()}`;

    //let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`;
 
    let url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apiKey}&language=es`; 
    return this.http.get( url );
  }


}
