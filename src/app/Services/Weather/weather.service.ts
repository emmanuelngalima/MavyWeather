import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrentForecast } from '@app/Models/current-forecast.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private baseUrl = "https://api.weatherapi.com/v1/current.json";

  constructor(private http:HttpClient) { }

  getCurrentWeather():Observable<CurrentForecast> {
    let params = new HttpParams().append('q', "Dublin,CA");
    return this.http.get<CurrentForecast>(this.baseUrl, {params}); 
  }


}
