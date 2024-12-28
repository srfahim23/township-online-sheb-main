import React, { useState, useEffect } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = 'your_openweather_api_key'; // Replace with your API key
    const CITY = 'Dhaka'; // Replace with your preferred city
    const UNITS = 'metric'; // Use 'imperial' for Fahrenheit

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
                <p>Loading weather data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
                <p>Error: {error}</p>
            </div>
        );
    }

    const { main, weather, name } = weatherData;

    return (
        <div className="flex items-center justify-center h-screen bg-blue-800 text-white">
            <div className="bg-blue-900 p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">{name}</h1>
                <p className="text-2xl">{weather[0].description}</p>
                <p className="text-6xl font-bold">{Math.round(main.temp)}°C</p>
                <p>Feels like: {Math.round(main.feels_like)}°C</p>
                <p>Humidity: {main.humidity}%</p>
            </div>
        </div>
    );
};

export default Weather;



// i added something for testing purpose 