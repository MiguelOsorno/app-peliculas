import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculasPopulares: [] = [];
  peliculasKids: [] = [];
  peliculasCartelera = [];

  constructor( private peliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.cargarPeliculasPopulares();
    this.cargarPeliculasKids();
    this.cargarPeliculasCartelera();
  }

  cargarPeliculasPopulares(){
    this.peliculasService.getPopulares()
    .subscribe( (peliculas:any) => {
      this.peliculasPopulares = peliculas.results;
      //console.log('populares', this.peliculasPopulares);
    });
  }

  cargarPeliculasKids(){
    this.peliculasService.getPopularesKids()
    .subscribe( (peliculasKids:any) => {
      this.peliculasKids = peliculasKids.results;
      //console.log('kids',this.peliculasKids);
    });
  }

  cargarPeliculasCartelera(){
    this.peliculasService.getCarteleta()
                         .subscribe( (peliculasCartelera:any) =>{
                           this.peliculasCartelera = peliculasCartelera.results;
                           //console.log('cartelera:', this.peliculasCartelera);
                         })
  }

  
}
