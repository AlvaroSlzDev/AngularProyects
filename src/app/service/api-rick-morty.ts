import { Injectable,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/personajes';

@Injectable({
  providedIn: 'root',
})
export class ApiRickMorty {
  //property
  private apiUrl = signal<string>('https://rickandmortyapi.com/api/character');

  //inject dependencies
  constructor(private http: HttpClient){}

  //methods
  getAllCharacters() {
    return this.http.get<ApiResponse>(this.apiUrl());
  }

  getCharacterById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  getCharacterByName(name: string) {
    const url = `${this.apiUrl}/?name=${name}`;
    return this.http.get(url);
  }
}
