// Projeto BBBOOKS

import { Component } from '@angular/core';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { Item, LivrosResultado } from 'src/app/models/volume';
import { VolumeService } from 'src/app/service/volume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  secaoHTML: string = 'html';
  secaoCSS: string = 'css';
  secaoJavaScript: string = 'javascript';
  secaoTypeScript: string = 'typescript';
  secaoAngular: string = 'angular';
  secaoFrontEnd: string = 'front-end';

  livrosFrontEnd: LivroVolumeInfo[];
  livrosHTML: LivroVolumeInfo[];
  livrosCSS: LivroVolumeInfo[];
  livrosJavaScript: LivroVolumeInfo[];
  livrosTypeScript: LivroVolumeInfo[];
  livrosAngular: LivroVolumeInfo[];

  ngOnInit(): void {
    this.buscaLivrosFrontEnd();
    this.buscaLivrosHTML();
    this.buscaLivrosCSS();
    this.buscaLivrosJavaScript();
    this.buscaLivrosTypeScript();
    this.buscaLivrosAngular();
  }

  constructor(private service: VolumeService) {}

  buscaLivrosFrontEnd() {
    this.service.pesquisar(this.secaoFrontEnd).subscribe({
      next: (items) => {
        this.livrosFrontEnd = this.livrosResultadoParaLivros(items);
      },
      error: (erro) => console.error(erro),
    });
  }

  buscaLivrosHTML() {
    this.service.pesquisar(this.secaoHTML).subscribe({
      next: (items) => {
        this.livrosHTML = this.livrosResultadoParaLivros(items);
      },
      error: (erro) => console.error(erro),
    });
  }

  buscaLivrosCSS() {
    this.service.pesquisar(this.secaoCSS).subscribe({
      next: (items) => {
        this.livrosCSS = this.livrosResultadoParaLivros(items);
      },
      error: (erro) => console.error(erro),
    });
  }

  buscaLivrosJavaScript() {
    this.service.pesquisar(this.secaoJavaScript).subscribe({
      next: (items) => {
        this.livrosJavaScript = this.livrosResultadoParaLivros(items);
      },
      error: (erro) => console.error(erro),
    });
  }

  buscaLivrosTypeScript() {
    this.service.pesquisar(this.secaoTypeScript).subscribe({
      next: (items) => {
        this.livrosTypeScript = this.livrosResultadoParaLivros(items);
      },
      error: (erro) => console.error(erro),
    });
  }

  buscaLivrosAngular() {
    this.service.pesquisar(this.secaoAngular).subscribe({
      next: (items) => {
        this.livrosAngular = this.livrosResultadoParaLivros(items);
      },
      error: (erro) => console.error(erro),
    });
  }

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }
}
