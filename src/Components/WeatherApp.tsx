import React, { useState } from 'react';
import axios from 'axios';
import type { WeatherData } from '../types';

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Vui lòng nhập tên thành phố.');
      return;
    }
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const response = await axios.get<WeatherData>(`https://wttr.in/${city}?format=j1`);
      setWeather(response.data);
    } catch (err) {
      setError('Không tìm thấy thành phố. Vui lòng thử lại.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <h2>Bài 1: Ứng dụng Thời tiết 🌦️</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nhập tên thành phố"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Đang tìm...' : 'Tìm kiếm'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <h3>Thời tiết tại {weather.nearest_area[0].areaName[0].value}</h3>
          <p><strong>Nhiệt độ:</strong> {weather.current_condition[0].temp_C}°C</p>
          <p><strong>Tình trạng:</strong> {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;