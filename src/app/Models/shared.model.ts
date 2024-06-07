export interface Condition {
    text: string;
    icon: string;
    code: number;
  }

  export interface Location {
    name: string;           // example: 'New York'
    region: string;         // example: 'New York'
    country: string;        // example: 'United States of America'
    lat: number;            // example: 40.71
    lon: number;            // example: -74.01
    tz_id: string;          // example: 'America/New_York'
    localtime_epoch: number;// example: 1658522976
    localtime: string;      // example: '2022-07-22 16:49'
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  }
