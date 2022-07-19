import React, {useEffect} from "react";
import '../style/App.css';
import {WeekWeather} from "./WeekWeather";
import MainPage from "./MainPage";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchHourlyWeather, fetchNowWeather} from "../redux/weatherReducer";

function App() {
    const cities = useSelector(state => state.weather.cities)
    const lat = useSelector(state => state.weather.lat);
    const lon = useSelector(state => state.weather.lon);
    const units = useSelector(state => state.weather.units);
        const isSearchModalActive = useSelector(state => state.weather.isSearchModalActive);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowWeather(lat, lon, "en", units));
        dispatch(fetchHourlyWeather(lat, lon, "en", units));
    }, [lon, units])

    const nowWeather = useSelector(state => state.weather.nowWeather);
    const hourlyWeather = useSelector(state => state.weather.hourlyWeather);
    const date = new Date();

    return (
        <Routes>
            <Route path='' element={<MainPage nowWeather={nowWeather} hourlyWeather={hourlyWeather} date={date}
                                              cities={cities} dispatch={dispatch} units={units} isSearchModalActive={isSearchModalActive}/>}/>
            <Route path='/week' element={<WeekWeather hourlyWeather={hourlyWeather} nowWeather={nowWeather} units={units}/>}/>
        </Routes>
    );
}

export default App;
