import { Component, OnInit,Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input() peliculas: any = [];
  @Input() pagina: string;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  verMas( id: string){
    this.router.navigate(['/pelicula', id, this.pagina]);
  }

}
