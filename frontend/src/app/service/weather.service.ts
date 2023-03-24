import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string):Observable<any>{
    return this.http.get<any>(environment.WEATHER_API_BASE_URL, {
      headers: new HttpHeaders()
      .set(environment.X_RapidAPI_Key_Header_Name, environment.X_RapidAPI_Key_Header_Value)
      .set(environment.X_Rapid_API_Host_Header_Name, environment.X_Rapid_API_Host_Header_Value),
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', 'da0f9c8d90bde7e619c3ec47766a42f4')
      .set('units', 'standard')
    })
  }
}
