import { useCallback, useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import Weather from "~components/weather/index"

const province = "上海"
const city = "上海"

function IndexPopup() {
  const [weatherInfo, setWeatherInfo] = useState()

  const getWeatherInfo = useCallback(async () => {
    const resp = await sendToBackground({
      name: "weather",
      body: {
        province,
        city
      }
    })
    if (resp.data) setWeatherInfo(resp.data)
  }, [])

  useEffect(() => {
    console.log("get weather info")
    getWeatherInfo()
  }, [])

  return (
    <div>
      {weatherInfo && (
        <Weather observe={weatherInfo} province="上海" city="上海" />
      )}
    </div>
  )
}

export default IndexPopup
