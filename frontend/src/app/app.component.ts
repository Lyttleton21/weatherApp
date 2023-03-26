import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cityName:string = 'Ibadan';
  weatherData: any;
  error:boolean = false;
  errorMessage?:string


  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onsubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: data => {
        this.weatherData = data;
        //console.log(this.weatherData);
      },
      error: err => {
        this.error = true;
        this.errorMessage = err.message;
      }
    });
  }
}
