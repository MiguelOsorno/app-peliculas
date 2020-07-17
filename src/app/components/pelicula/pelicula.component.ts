import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'
import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  idPelicula: number;
  paginaOrigen: string;
  pelicula: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private router: Router) {
    this.activatedRoute.params.subscribe( params => {
      this.idPelicula = parseInt(params['id']);
      this.paginaOrigen = params['pagina'];
      this.cargarDatosPelicula();
    })
   }

  ngOnInit(): void {
  }

  cargarDatosPelicula(){
    this.peliculasService.buscarPelicula(this.idPelicula)
    .subscribe( (pelicula: any) =>{
      //console.log(pelicula);
      this.pelicula = pelicula;
    });
  }

  regresar(){
    this.router.navigate([`${this.paginaOrigen}`]);
  }

}
