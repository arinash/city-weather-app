import { useState } from "react";
import useWeather from "../hooks/useWeather";
import { ClipLoader } from "react-spinners";
import Search from "./Search";
import WeatherCard from "./WeatherCard";

export default function Input() {

    const [query, setQuery] = useState('');
    const [city, setCity] = useState<string | null>(null);
    const {localTime, weather, isLoading, error} = useWeather(city);

    return (
        <div className="w-full space-y-6">
            {/* Loader for loading state */}
            <div className="flex justify-center py-6">
                <ClipLoader
                    loading={isLoading}
                    color="#1464f2"
                    size={32} />
            </div>

            {/* Search bar */}
            <Search query={query} onChange={setQuery} onSearch={() => setCity(query)} />
            
            {/* Initial empty state */}
            {!city && !isLoading && (
                <p className="text-center text-blueAccent/80 text-sm py-4">
                    Enter a city name to see the local weather
                </p>
            )}

            {/* Error */}
            {error && (
                <div className="text-red-600 bg-red-100 text-md rounded-2xl border border-red-200 px-4 py-3">
                    Could not find that city. Please try again.
                </div>
            )}
            {weather && city && (
                <WeatherCard localTime={localTime} city={city} info={weather} />
            )}
        </div>
  )
}
