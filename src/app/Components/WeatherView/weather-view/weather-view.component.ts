import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@app/Services/Weather/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrl: './weather-view.component.css'
})
export class WeatherViewComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.getCurrentWeather();

  }


  getCurrentWeather() {
    this.weatherService.getCurrentWeather().subscribe(data => {
      console.log(data.location);
      console.log("Hi");
    })
  }

}
