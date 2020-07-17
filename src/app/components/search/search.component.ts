import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  

  constructor( public peliculasService: PeliculasService,
               private activatedRouter: ActivatedRoute ) {
                 this.activatedRouter.params.subscribe( params =>{
                   if(params['busqueda']){
                     this.busqueda(params['busqueda']);
                   }
                 })
  }

  ngOnInit(): void {
  }

  busqueda(termino:string){
    if(termino.length == 0){
      return;
    }
    this.peliculasService.buscarPeliculas( termino )
                         .subscribe( (peliculasBuscadas:any) =>{
                           this.peliculasService.peliculas = peliculasBuscadas.results;
                         });
  }

}
