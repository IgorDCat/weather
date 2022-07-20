import React from "react";
import menuIcon from "../assets/menu_icon.png"
import pinIcon from "../assets/pin.png"
import preloaderIcon from "../assets/preloader.png"
import arrowImg from "../assets/arrow1.png"
import sunriseIcon from "../assets/sunrise_icon.png"
import sunsetIcon from "../assets/sunset_icon1.png"
import eyeIcon from "../assets/eye_icon.png"
import WindHumidityRain from "./WindHumidityRain";
import {NavLink} from "react-router-dom";
import {selectImg} from "../utils/selectImage";
import {dateConverter, timeConverter} from "../utils/dateConverter";
import Search from "./Search";
import {setUnits} from "../redux/weatherReducer";

const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

const MainPage = (props) => {

    return (
        <div className={props.isSearchModalActive ? "active" : null}>
            <div className="container">
                <div className="header">
                    <div className="header__temperature_icon" onClick={() => props.dispatch(setUnits(props.units))}>
                        °{props.units === "metric" ? "C (change)" : "F (change)"}
                    </div>

                    <Search cities={props.cities} isSearchModalActive={props.isSearchModalActive}/>

                    <div className="header__menu_icon">
                        <img src={menuIcon} alt=""/>
                    </div>
                </div>
                <div className="city">
                    <img src={pinIcon} alt=""/>
                    <span className='city__name'>{props.nowWeather ? props.nowWeather.name : "---"}</span>

                </div>
                <div className="main_loading">
                    <img src={preloaderIcon} alt=""/>
                    Updating...
                </div>
                <div className="main__content">
                    <img src={props.nowWeather ? selectImg(props.nowWeather.weather[0].icon) : null} alt=""/>
                    <div className="main__temperature">
                        {props.nowWeather ? Math.round(props.nowWeather.main.temp) : "---"}<span>°</span>
                        <div className="main__description">
                            {props.nowWeather ? capitalizeFirstLetter(props.nowWeather.weather[0].description) : "---"}
                        </div>
                        <div className="main__date">
                        {props.date.toLocaleDateString()}
                    </div>
                    </div>


                </div>

                <WindHumidityRain nowWeather={props.nowWeather} units={props.units}/>

                <div className="know_more">
                    Know more
                </div>
            </div>
            <div className="bottom_container">
                <div className="bottom__title">
                    <div className="main__description">Today</div>
                    <NavLink to='/week'>
                        <div className="bottom__days-link">weather for 5 days <img src={arrowImg} alt=""/></div>
                    </NavLink>
                </div>
                <div>
                    <div className="sunrise_sunset">
                        <img src={sunriseIcon} alt=""/>
                        <div className="sunrise_sunset__title">Sunrise:</div>
                        <div>{props.nowWeather ? timeConverter(props.nowWeather.sys.sunrise, props.nowWeather.timezone) : "---"}</div>
                    </div>
                    <div className="sunrise_sunset">
                        <img src={sunsetIcon} alt=""/>
                        <div className="sunrise_sunset__title">Sunset:</div>
                        <div>{props.nowWeather ? timeConverter(props.nowWeather.sys.sunset, props.nowWeather.timezone) : "---"}</div>
                    </div>
                    <div className="sunrise_sunset">
                        <img src={eyeIcon} alt=""/>
                        <div className="sunrise_sunset__title">Visibility:</div>
                        <div>{props.nowWeather ? props.nowWeather.visibility : "---"}m</div>
                    </div>
                </div>

                <div className="bottom__widgets">
                    {props.hourlyWeather ? props.hourlyWeather.list.map(h => props.hourlyWeather.list.indexOf(h) < 4 ?
                        <div className="bottom__widget" key={h.dt}>
                            <div className="bottom__percent">
                                {Math.round(h.main.temp)}°
                            </div>
                            <img src={selectImg(h.weather[0].icon)} alt=""/>
                            <div className="bottom__time">
                                {dateConverter(h.dt_txt, props.hourlyWeather.city.timezone)}
                            </div>
                        </div> : null) : null}
                </div>
            </div>
        </div>
    )
}

export default MainPage