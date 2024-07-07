import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {
  province: string
  city: string
}

interface AirQuality {
  aqi: number
  aqi_level: number
  aqi_name: string
  co: string
  no2: string
  o3: string
  pm10: string
  pm2_5: string
  so2: string
  update_time: string
}

interface Alarm {}

interface WeatherForecast {
  degree: string
  update_time: string
  weather: string
  weather_code: string
  weather_short: string
  weather_url: string
  wind_direction: string
  wind_power: string
}

interface Forecast1H {
  [key: string]: WeatherForecast
}

interface DailyForecast {
  aqi_level: number
  aqi_name: string
  aqi_url: string
  day_weather: string
  day_weather_code: string
  day_weather_short: string
  day_weather_url: string
  day_wind_direction: string
  day_wind_direction_code: string
  day_wind_power: string
  day_wind_power_code: string
  max_degree: string
  min_degree: string
  night_weather: string
  night_weather_code: string
  night_weather_short: string
  night_weather_url: string
  night_wind_direction: string
  night_wind_direction_code: string
  night_wind_power: string
  night_wind_power_code: string
  time: string
}

interface Forecast24H {
  [key: string]: DailyForecast
}

interface IndexDetail {
  detail: string
  info: string
}

interface Index {
  airconditioner: IndexDetail
  beer: IndexDetail
  // 继续定义其他索引
  [key: string]: IndexDetail
}

interface WeatherData {
  air: AirQuality
  alarm: Alarm
  forecast_1h: Forecast1H
  forecast_24h: Forecast24H
  index: Index
}

export type RequestResponse =
  | {
      data: WeatherData
      message: string
      status: number
    }
  | {
      error: string
    }

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (request, response) => {
  const { province = "上海", city = "上海" } = request.body
  const url = `https://wis.qq.com/weather/common?source=pc&weather_type=forecast_1h|forecast_24h|alarm|limit|tips|rise|observe|index|air&province=${province}&city=${city}&county=`

  try {
    const res = await fetch(url)
    console.log(res)
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = (await res.json()) as RequestResponse
    response.send(data)
  } catch (err) {
    console.error("Error fetching weather data:", err)
    response.send({ error: "Failed to fetch weather data" })
  }
}

export default handler
