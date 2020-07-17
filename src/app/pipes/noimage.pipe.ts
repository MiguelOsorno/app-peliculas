import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: string ): string {

    if( image ){
      return `http://image.tmdb.org/t/p/w300${image}`;
    }
    else{
      return 'assets/img/noimage.png';
    }

  }

}
