// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  WEATHER_API_BASE_URL:'https://openweather43.p.rapidapi.com/weather',
  X_Rapid_API_Host_Header_Name:'X-RapidAPI-Host',
  X_Rapid_API_Host_Header_Value: 'openweather43.p.rapidapi.com',
  X_RapidAPI_Key_Header_Name: 'X-RapidAPI-Key',
  X_RapidAPI_Key_Header_Value: '45c078e12fmsh1b020b694b485fdp1feeb4jsnbfc47157eeb2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
