export interface WeatherData {
  current_condition: [
    {
      temp_C: string;
      weatherDesc: [{ value: string }];
    }
  ];
  nearest_area: [
    {
      areaName: [{ value: string }];
    }
  ];
}

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
  published_at: string;
}