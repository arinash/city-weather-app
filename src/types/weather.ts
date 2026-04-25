export interface WeatherConditions {
    temperature: number;
    humidity: number;
    windSpeed: number;
    windGust: number;
    uvIndex: number;
}

export interface CityData {
    localTime: string,
    weather: WeatherConditions;
}