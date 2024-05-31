import { Component, OnInit } from '@angular/core';
import { CurrentForecast } from '@app/Models/current-forecast.model';
import { WeatherService } from '@app/Services/Weather/weather.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrl: './weather-view.component.css'
})
export class WeatherViewComponent implements OnInit {
  city:string ="";
  state:string ="";
  temperature: number = 0;
  weatherIcon: string = "";





  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getCurrentWeather();
  }


  getCurrentWeather() {
    this.weatherService.getCurrentWeather().subscribe(currentWeather => {
      console.log(currentWeather);
      this.city = currentWeather.location.name;
      this.state = currentWeather.location.region;
      this.temperature = currentWeather.current.temp_f;
      this.weatherIcon = currentWeather.current.condition.icon;
    })
  }

}
