// Projeto BBBOOKS

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/volume';

@Injectable({
  providedIn: 'root',
})
export class VolumeService {
  private readonly URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  pesquisar(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.URL, { params }).pipe(
      tap((retornoAPI) => console.log('Fluxo do tap', retornoAPI)),
      map((resultado) => resultado.items),
      tap((resultado) => console.log('Fluxo após o map', resultado))
    );
  }
}
