import useFetch from "./useFetch";
import { DateTime } from 'luxon';
import tz from 'tz-lookup';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export default function useWeather(city: string| null) {
    const weatherUrl = city ? `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}` : '';
    const {data , isLoading, error} = useFetch(weatherUrl);

    const utcTime = DateTime.fromISO(data?.data.time, { zone: 'UTC' });
    const timeZone = (data?.location.lat && data?.location.lon) 
    ? tz(data.location.lat, data.location.lon) 
    : 'UTC';
    const localTime = utcTime.setZone(timeZone).toFormat('h:mm a');
    
    return {
        localTime: localTime,
        weather: data?.data.values ?? null,
        isLoading,
        error
    }
}
