import React from "react";
import menuIcon from "../assets/menu_icon.png"
import pinIcon from "../assets/pin.png"
import preloaderIcon from "../assets/preloader.png"
import arrowImg from "../assets/arrow1.png"
import WindHumidityRain from "./WindHumidityRain";
import {NavLink} from "react-router-dom";
import {selectImg} from "../utils/selectImage";
import {dateConverter} from "../utils/dateConverter";


const capitalizeFirstLetter = (string) => {
  return  string[0].toUpperCase() + string.slice(1);
}


const MainPage = (props) => {

    console.log('render')

    return (
        <div className="app">
            <div className="container">
                <div className="header">
                    <div className="header__temperature_icon">
                        °C
                    </div>
                    <div className="header__menu_icon">
                        <img src={menuIcon} alt=""/>
                    </div>
                </div>
                <div className="city">
                    <img src={pinIcon} alt=""/>
                    <span className='city__name'>{props.nowWeather? props.nowWeather.name: "---"}</span>

                </div>
                <div className="main_loading">
                    <img src={preloaderIcon} alt=""/>
                    Updating...
                </div>
                <div className="main__content">
                    <img src={props.nowWeather? selectImg(props.nowWeather.weather[0].icon) : null} alt=""/>
                    <div className="main__temperature">
                        {props.nowWeather? Math.round(props.nowWeather.main.temp) : "---"}<span>°</span>
                    </div>
                    <div className="main__description">
                        {props.nowWeather? capitalizeFirstLetter(props.nowWeather.weather[0].description) : "---"}
                    </div>
                    <div className="main__date">
                        {props.date.toLocaleDateString()}
                    </div>
                </div>

                <WindHumidityRain nowWeather={props.nowWeather} windSpeed={props.windSpeed} humidity={props.humidity} pressure={props.pressure}/>

                <div className="know_more">
                    Know more
                </div>
            </div>
            <div className="bottom_container">
                <div className="bottom__title">
                    <div>Today</div>
                    <NavLink to='/week'>
                        <div className="bottom__days-link">5 days <img src={arrowImg} alt=""/></div>
                    </NavLink>
                </div>

                <div className="bottom__widgets">
                    {props.hourlyWeather? props.hourlyWeather.list.map(h => props.hourlyWeather.list.indexOf(h)<4 ? <div className="bottom__widget" key={h.dt}>
                        <div className="bottom__percent">
                            {Math.round(h.main.temp)}°
                        </div>
                        <img src={selectImg(h.weather[0].icon)} alt=""/>
                        <div className="bottom__time">
                            {dateConverter(h.dt_txt, props.hourlyWeather.city.timezone)}
                        </div>
                    </div>: null):null}
                </div>
            </div>
        </div>
    )
}

export default MainPage