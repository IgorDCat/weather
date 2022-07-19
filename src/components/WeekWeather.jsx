import React from "react";
import backArrowIcon from "../assets/back_arrow.png";
import menuIcon from "../assets/menu_icon.png";
import calendarIcon from "../assets/calendar_icon.png";
import WindHumidityRain from "./WindHumidityRain";
import {NavLink} from "react-router-dom";
import {dateConverter, getNewDate} from "../utils/dateConverter";
import {selectImg} from "../utils/selectImage";

export const WeekWeather = (props) => {
    return (
        <div className="black">
            <div className="container">
                <div className="header">
                    <NavLink to='/'>
                        <div className="header__temperature_icon">
                            <img src={backArrowIcon} alt=""/>
                        </div>
                    </NavLink>
                    <div className="header__menu_icon">
                        <img src={menuIcon} alt=""/>
                    </div>
                </div>
                <div className="week__title">
                    <img src={calendarIcon} alt=""/>
                    5 Days
                </div>
                <div className="week__main">
                    <div className="week__main_image">
                         <img src={props.nowWeather? selectImg(props.nowWeather.weather[0].icon) : null} alt=""/>
                    </div>
                    <div className="week__main_details">
                        <div className="week__main_details_title">
                            Today
                        </div>
                        <div className="week__main_details_temperature">
                            {props.nowWeather ? Math.round(props.nowWeather.main.temp) : "---"}<span>°</span>
                        </div>
                        <div className="week__main_details_description">
                            {props.description}
                        </div>
                    </div>
                </div>
                <div className="line">
                </div>

                <WindHumidityRain nowWeather={props.nowWeather} units={props.units}/>

            </div>
            <div className="newDay">Today:</div>
            {props.hourlyWeather? props.hourlyWeather.list.map(h =>
                <div key={h.dt}>
                    <div className="newDay">{getNewDate(h.dt_txt, props.hourlyWeather.city.timezone)}</div>
            <div className="week__content">

                <div className="week__content_day">

                    <div>{dateConverter(h.dt_txt, props.hourlyWeather.city.timezone)}</div>

                </div>
                <div className="week__content_description">
                    <img src={selectImg(h.weather[0].icon)} alt=""/>
                    {h.weather[0].description}
                </div>
                <div className="week__content_temperature">
                    {Math.round(h.main.temp)}°
                </div>
            </div>
            </div>): null}

        </div>
    )
}

