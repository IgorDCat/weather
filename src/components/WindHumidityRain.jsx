import React from "react";
import windImg from "../assets/wind.png"
import humidityImg from "../assets/humidity.png"
import chanceOfRainImg from "../assets/chance_of_rain.png"

const WindHumidityRain = (props) => {
    return (

        <div className="main__parameters">
            <div className="main__parameters_item">
                <img src={windImg} alt=""/>
                <div>
                    <div className="main__parameters_number">
                        {props.nowWeather ? props.nowWeather.wind.speed : "---"} {props.units === "metric" ? "m/s" : "mph"}
                    </div>
                    <div className="main__parameters_text">
                        Wind
                    </div>
                </div>
            </div>
            <div className="main__parameters_item">
                <img src={humidityImg} alt=""/>
                <div>
                    <div className="main__parameters_number">
                        {props.nowWeather ? props.nowWeather.main.humidity : "---"}%
                    </div>
                    <div className="main__parameters_text">
                        Humidity
                    </div>
                </div>
            </div>
            <div className="main__parameters_item">
                <img src={chanceOfRainImg} alt=""/>
                <div>
                    <div className="main__parameters_number">
                        {props.nowWeather ? props.nowWeather.main.pressure : "---"} hPa
                    </div>
                    <div className="main__parameters_text">
                        Pressure
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindHumidityRain