import { WeatherData } from './services/models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor (private WeatherService:WeatherService){

  }

  cityName :string = 'Yangon';
  weatherData?:WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  onsubmit():void{
    this.getWeatherData(this.cityName);
    this.cityName="";
  }

  private getWeatherData(cityName:string){
    this.WeatherService.getWeatherData(cityName)
      .subscribe({
        next:(response) =>{
          this.weatherData = response
          console.log(response);
        }
      });
  }
}
