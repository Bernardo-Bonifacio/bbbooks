// Projeto BBBOOKS

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autores',
})
export class AutoresPipe implements PipeTransform {
  transform(autores: any[]): string {
    if (autores) {
      return autores[0];
    }
    return '';
  }
}
