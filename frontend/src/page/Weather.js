import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import { FaSleigh } from 'react-icons/fa';

// const weather = () => {
//   return (
//     <div>
//       weather
//     </div>
//   )
// }

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');

//   const API_KEY = 'f201b8253d7d779ed2e7f0f749de3ccf'; // Replace with your OpenWeatherMap API key

//   const fetchWeather = async (e) => {
//     e.preventDefault();

//     if (!city.trim()) {
//       setError('Please enter a city name.');
//       setWeather(null);
//       return;
//     }

//     try {
//       setError('');
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//       );
//       setWeather(response.data);
//     } catch (err) {
//       setError('City not found or an error occurred!');
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 text-white p-6">
//       <h1 className="text-5xl font-bold mb-8 drop-shadow-lg">🌍 Weather Forecast</h1>

//       <form
//         onSubmit={fetchWeather}
//         className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-6"
//       >
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Enter city name"
//           className="flex-grow py-3 px-4 rounded-lg shadow-lg text-gray-800 focus:outline-none"
//         />
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg shadow-lg font-bold transition-all"
//         >
//           Search
//         </button>
//       </form>

//       {error && (
//         <p className="text-red-400 text-lg bg-white rounded-lg px-4 py-2 mb-4 shadow-lg">
//           {error}
//         </p>
//       )}

//       {weather && (
//         <div className="w-full max-w-2xl bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
//             <h2 className="text-4xl font-bold">{weather.name}</h2>
//             <p className="text-xl capitalize mt-2">{weather.weather[0]?.description || 'N/A'}</p>
//             <p className="text-6xl font-extrabold mt-4">
//               {weather.main?.temp || 'N/A'}°C
//             </p>
//           </div>
//           <div className="p-6 grid grid-cols-2 gap-6 sm:grid-cols-3 text-center">
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Feels Like</p>
//               <p className="text-2xl font-bold">{weather.main?.feels_like || 'N/A'}°C</p>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Humidity</p>
//               <p className="text-2xl font-bold">{weather.main?.humidity || 'N/A'}%</p>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Min Temp</p>
//               <p className="text-2xl font-bold">{weather.main?.temp_min || 'N/A'}°C</p>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Max Temp</p>
//               <p className="text-2xl font-bold">{weather.main?.temp_max || 'N/A'}°C</p>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Wind Speed</p>
//               <p className="text-2xl font-bold">{weather.wind?.speed || 'N/A'} m/s</p>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Pressure</p>
//               <p className="text-2xl font-bold">{weather.main?.pressure || 'N/A'} hPa</p>
//             </div>
//             {/* <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Pressure</p>
//               <p className="text-2xl font-bold">{weather.main?.sunrise || 'N/A'} hPa</p>
//             </div>
//             <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
//               <p className="text-sm font-medium text-gray-500">Pressure</p>
//               <p className="text-2xl font-bold">{weather.sunset || 'N/A'} hPa</p>
//             </div> */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'f201b8253d7d779ed2e7f0f749de3ccf'; // Replace OpenWeatherMap API key

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError('Please enter a city name.');
      setWeather(null);
      return;
    }

    try {
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setError('City not found or an error occurred!');
      setWeather(null);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700 text-white p-6">
      <h1 className="text-5xl font-bold mb-8 drop-shadow-lg">🌍 Weather Forecast</h1>

      <form
        onSubmit={fetchWeather}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-6"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow py-3 px-4 rounded-lg shadow-lg text-gray-800 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg shadow-lg font-bold transition-all"
        >
          Search
        </button>
      </form>

      {error && (
        <p className="text-red-400 text-lg bg-white rounded-lg px-4 py-2 mb-4 shadow-lg">
          {error}
        </p>
      )}

      {weather && (
        <div className="w-full max-w-2xl bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
            <h2 className="text-4xl font-bold">{weather.name}</h2>
            <p className="text-xl capitalize mt-2">{weather.weather[0]?.description || 'N/A'}</p>
            <p className="text-6xl font-extrabold mt-4">
              {weather.main?.temp || 'N/A'}°C
            </p>
          </div>
          <div className="p-6 grid grid-cols-2 gap-6 sm:grid-cols-3 text-center">
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500">Feels Like</p>
              <p className="text-2xl font-bold">{weather.main?.feels_like || 'N/A'}°C</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500">Humidity</p>
              <p className="text-2xl font-bold">{weather.main?.humidity || 'N/A'}%</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500">Min Temp</p>
              <p className="text-2xl font-bold">{weather.main?.temp_min || 'N/A'}°C</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500">Max Temp</p>
              <p className="text-2xl font-bold">{weather.main?.temp_max || 'N/A'}°C</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500">Wind Speed</p>
              <p className="text-2xl font-bold">{weather.wind?.speed || 'N/A'} m/s</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-gray-500">Pressure</p>
              <p className="text-2xl font-bold">{weather.main?.pressure || 'N/A'} hPa</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm col-span-2 sm:col-span-1">
              <p className="text-sm font-medium text-gray-500">Sunrise</p>
              <p className="text-2xl font-bold">{formatTime(weather.sys?.sunrise)}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm col-span-2 sm:col-span-1">
              <p className="text-sm font-medium text-gray-500">Sunset</p>
              <p className="text-2xl font-bold">{formatTime(weather.sys?.sunset)}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm col-span-2 sm:col-span-1">
              <p className="text-sm font-medium text-gray-500">Country Code</p>
              <p className="text-2xl font-bold">{weather.sys?.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
