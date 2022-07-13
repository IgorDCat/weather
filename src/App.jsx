import React, {useEffect} from "react";
import './App.css';
import {WeekWeather} from "./WeekWeather";
import MainPage from "./MainPage";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchHourlyWeather, fetchTodayWeather} from "./weatherReducer";

function App() {
    const lat = useSelector(state => state.weather.lat);
    const lon = useSelector(state => state.weather.lon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodayWeather(lat, lon, "en"));
        dispatch(fetchHourlyWeather(lat, lon, "en"));
    }, [])

    const nowWeather = useSelector(state => state.weather.nowWeather);
    const hourlyWeather = useSelector(state => state.weather.hourlyWeather);
    const date = new Date();

    return (
        <Routes>
            <Route path='' element={<MainPage nowWeather={nowWeather} hourlyWeather={hourlyWeather} date={date}/>}/>
            <Route path='/week' element={<WeekWeather hourlyWeather={hourlyWeather} nowWeather={nowWeather}/>}/>
        </Routes>
    );
}

export default App;
