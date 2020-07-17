import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() pelicula: any = {};
  @Input () pagina: string;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  verMas(){
    this.router.navigate(['/pelicula', this.pelicula.id, this.pagina]);
  }

}
