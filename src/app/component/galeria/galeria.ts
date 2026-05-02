import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ApiRickMorty } from '../../service/api-rick-morty';
import { PropertyRickMorty } from '../../service/property-rick-morty';
import { Character } from '../../models/personajes';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css'],
})

export class Galeria implements OnInit {
  //Inject dependencies
  serviceApi = inject(ApiRickMorty);
  serviceProp = inject(PropertyRickMorty);

  //properties
  statusCharacters = signal<string>('');

  //lifecycle hooks
  ngOnInit(){
    this.getCharactersApi();
  }

  //methods for api
  getCharactersApi() {
    return this.serviceApi.getAllCharacters().subscribe((response) => {
      this.serviceProp.listCharacters.set(response.results);
    });
  }
  //methods for status change (btn)
  statusChange(status: string){
    this.statusCharacters.set(status);
  }

  //method for filter characters by status
  listFilterByStatus = computed(() => {
    //properties
    const all = this.serviceProp.listCharacters() ?? [];
    const status = this.statusCharacters();
    //filter by status
    if(!status || status === 'All') return all;
    return all.filter(character => character.status === status) || null;
  });
}
