import { Component,inject } from '@angular/core';
import { ApiWeather } from '../../services/api-weather';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  //inject ApiWeather service
  serviceApi = inject(ApiWeather);

  //property for city name

  //method for search weather by city name
  queryCity(city: string): void {
    this.serviceApi.searchWeatherByCity(city);
  }
}
