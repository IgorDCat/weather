import {api} from "./api";

const SET_HOURLY_WEATHER = "SET_HOURLY_WEATHER";
const SET_NOW_WEATHER = "SET_NOW_WEATHER";

const initialState = {
    nowWeather: null,
    hourlyWeather: null,
    lat: 53.03,
    lon: 158.66
}


const setHourlyWeather = (hourlyWeather) => {
    return {type: SET_HOURLY_WEATHER, hourlyWeather: hourlyWeather};
}

const setNowWeather = (nowWeather) => {
    return {type: SET_NOW_WEATHER, nowWeather: nowWeather};
}

export const fetchTodayWeather = (lat, lon, lang) => async (dispatch) => {
    const response = await api.getNowWeather(lat, lon, lang);
    await dispatch(setNowWeather(response));
    //const response1 = await api.getCities("Moscow", 5);
}

export const fetchHourlyWeather = (lat, lon, lang) => async (dispatch) => {
     const response = await api.getWeekWeather(lat, lon, lang);
     await dispatch(setHourlyWeather(response));
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOURLY_WEATHER: {
            return {...state, hourlyWeather: action.hourlyWeather};
        }
        case SET_NOW_WEATHER: {
            return {...state, nowWeather: action.nowWeather};
        }
        default:
            return state;
    }
}

export default weatherReducer;