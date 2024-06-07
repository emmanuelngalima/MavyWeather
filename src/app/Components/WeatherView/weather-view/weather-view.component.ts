import { Component, OnInit } from '@angular/core';
import { FutureForecast } from '@app/Models/future-forcecast.model';
import { WeatherService } from '@app/Services/Weather/weather.service';


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
  description: string ="";


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getforecastWeather();
  }


  getforecastWeather() {
    this.weatherService.getUpcomingDaysForecast().subscribe(futureForecast => {
      this.setForecast(futureForecast);
      console.log(futureForecast)
    })
  }

  setForecast(forecastWeather:FutureForecast) {
    this.city = forecastWeather.location.name;
    this.state = forecastWeather.location.region;
    this.temperature = forecastWeather.current.temp_f;
    this.weatherIcon = forecastWeather.current.condition.icon;
    this.description = forecastWeather.current.condition.text
  }

}
