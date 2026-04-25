import type { WeatherConditions } from "../types/weather";
import { checkUVIndex } from "../utils/weatherUtils";

interface WeatherCardProps {
    localTime: string,
    city: string,
    info: WeatherConditions
};

export default function WeatherCard({ city, localTime, info }: WeatherCardProps) {
    
  return (
        <div className="bg-white/50 border border-blueAccent/20 rounded-2xl p-6 space-y-5">
            <h2 className="text-2xl font-bold text-blueAccent capitalize mb-1">
                {city}
            </h2>
            <p className="text-md text-blueAccent/80 mb-4">Local time: {localTime}</p>
            
            <h2 className="text-xl font-bold text-blueAccent mb-1">Weather</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg/50 rounded-2xl p-4 grid grid-cols-2 gap-2">
                    {[
                        { label: 'Temperature: ', value: `${info.temperature}°C`, icon: <span>&#127777;</span>},
                        { label: 'Humidity: ', value: `${info.humidity}%`, icon: <span>&#128167;</span>},
                    ].map(({ label, value, icon }) => (
                        <div key={label}>
                            <span></span>
                            <p className="text-md text-blueAccent/80 mb-2">{label}</p>
                            <p className="text-md text-blueAccent/80 mb-2 font-bold">{icon} {value}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-bg/50 rounded-2xl p-4 grid grid-cols-2 gap-2">
                    {[
                    { label: 'Wind Speed:', value: `${info.windSpeed}km/h`, icon: <span>&#128168;</span>},
                    { label: 'Wind Gusts:', value: `${info.windGust}km/h`, icon: <span>&#128168;</span>},
                    ].map(({ label, value, icon }) => (
                        <div key={label}>
                            <span></span>
                            <p className="text-md text-blueAccent/80 mb-2">{label}</p>
                            <p className="text-md text-blueAccent/80 mb-2 font-bold">{icon} {value}</p>
                        </div>
                    ))}
                </div>
                {/* {[
                    { label: 'Temperature: ', value: `${info.temperature}°C`, icon: <span>&#127777;</span>},
                    { label: 'Humidity: ', value: `${info.humidity}%`, icon: <span>&#128167;</span>},
                    { label: 'Wind Speed:', value: `${info.windSpeed}km/h`, icon: <span>&#128168;</span>},
                    { label: 'Wind Gusts:', value: `${info.windGust}km/h`, icon: <span>&#128168;</span>},
                    { label: 'UV Index:', value: `${info.uvIndex}`, icon: <span>&#x2600;&#xFE0F;</span>},
                ].map(({ label, value, icon }) => (
                    <div key={label}>
                        <span></span>
                        <p className="text-md text-blueAccent/80 mb-2">{label}</p>
                        <p className="text-md text-blueAccent/80 mb-2 font-bold">{icon} {value}</p>
                    </div>
                ))} */}
            </div>
            <div className="bg-bg/50 rounded-2xl p-4">
                {[
                { label: 'UV Index:', value: `${info.uvIndex}`, icon: <span>&#x2600;&#xFE0F;</span>},
                ].map(({ label, value, icon }) => (
                    <div key={label}>
                        <span></span>
                        <p className="text-md text-blueAccent/80 mb-2">{label}</p>
                        <p className="text-md text-blueAccent/80 mb-2 font-bold">{icon} {value}</p>
                    </div>
                ))}
                <p className="text-md text-blueAccent/80 mb-2 font-semibold">{checkUVIndex(info.uvIndex)}</p>
            </div>
        </div>
  )
}
