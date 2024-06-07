import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CurrentForecast } from '@app/Models/current-forecast.model';
import { Observable } from 'rxjs';
import { FutureForecast } from '@app/Models/future-forcecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private baseUrl = "https://api.weatherapi.com/v1";

  constructor(private http:HttpClient) { }

  getCurrentWeather():Observable<CurrentForecast> {
    let params = new HttpParams().set('q', "Dublin,CA");
    return this.http.get<CurrentForecast>(`${this.baseUrl}/current.json`, {params}); 
  }

  getUpcomingDaysForecast(): Observable<FutureForecast> {
    let params = new HttpParams()
    return this.http.get<FutureForecast>(`${this.baseUrl}/forecast.json`, {
      params:
        {
          q: "Dublin,CA",
          days: 7
        }
    });
  }


}
