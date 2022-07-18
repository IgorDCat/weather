import {api} from "../api/api";

const SET_HOURLY_WEATHER = "SET_HOURLY_WEATHER";
const SET_NOW_WEATHER = "SET_NOW_WEATHER";
const SET_CITIES = "SET_CITIES";
const SET_LAT = "SET_LAT";
const SET_LON = "SET_LON";

const initialState = {
    nowWeather: null,
    hourlyWeather: null,
    cities: null,
    lat: 55.75,
    lon: 37.62
}

const setHourlyWeather = (hourlyWeather) => {
    return {type: SET_HOURLY_WEATHER, hourlyWeather: hourlyWeather};
}

const setNowWeather = (nowWeather) => {
    return {type: SET_NOW_WEATHER, nowWeather: nowWeather};
}

const setCities = (cities) => {
    return {type: SET_CITIES, cities: cities};
}

const setLat = (lat) => {
    return {type: SET_LAT, lat: lat};
}

const setLon = (lon) => {
    return {type: SET_LON, lon: lon};
}

export const fetchNowWeather = (lat, lon, lang) => async (dispatch) => {
    const response = await api.getNowWeather(lat, lon, lang);
    await dispatch(setNowWeather(response));
}

export const fetchHourlyWeather = (lat, lon, lang) => async (dispatch) => {
     const response = await api.getWeekWeather(lat, lon, lang);
     await dispatch(setHourlyWeather(response));
}

export const fetchCities = (inputValue) => async (dispatch) => {
     const response = await api.getCities(inputValue, 5);
     await dispatch(setCities(response));
}

export const setCoordinates = (lat, lon) => (dispatch) => {
    dispatch(setCities(null));
    dispatch(setLat(lat));
    dispatch(setLon(lon));

}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOURLY_WEATHER: {
            return {...state, hourlyWeather: action.hourlyWeather};
        }
        case SET_NOW_WEATHER: {
            return {...state, nowWeather: action.nowWeather};
        }
        case SET_CITIES: {
            return {...state, cities: action.cities};
        }
        case SET_LAT: {
            return {...state, lat: action.lat};
        }
        case SET_LON: {
            return {...state, lon: action.lon};
        }
        default:
            return state;
    }
}

export default weatherReducer;