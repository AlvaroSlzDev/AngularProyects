import { Injectable,signal } from '@angular/core';
import { Character } from '../models/personajes';

@Injectable({
  providedIn: 'root',
})
export class PropertyRickMorty {
  //property
  listCharacters = signal<Character[] | null>(null);
}
