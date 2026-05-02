import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../models/weather';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})


export class ApiWeather {
  // inject dependency for HttpClient
  constructor(private http: HttpClient) {}

  // property for API key
  private apiKey: string = environment.weatherApiKey;
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  //property for store weather data
  public data = signal<WeatherResponse | null>(null);

  //methods shearch weather by city name
  public searchWeatherByCity(city: string): void {
    //property for API URL with city name and API key
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

    //make HTTP GET request to API
    this.http.get<WeatherResponse>(url).subscribe(
      (response) => {
        //store weather data in signal
        this.data.set(response);
      }
    );

  }

}
