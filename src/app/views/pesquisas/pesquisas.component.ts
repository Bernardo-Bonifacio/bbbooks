// Projeto BBBOOKS

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, switchMap } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { Item, Livro } from 'src/app/models/volume';
import { VolumeService } from 'src/app/service/volume.service';

const PAUSA = 300;

@Component({
  selector: 'app-pesquisas',
  templateUrl: './pesquisas.component.html',
  styleUrls: ['./pesquisas.component.css'],
})
export class PesquisasComponent {
  campoBusca = new FormControl();

  constructor(private service: VolumeService) {}

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado) => this.service.pesquisar(valorDigitado)),
    map((items) => this.livrosResultadoParaLivros(items))
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
