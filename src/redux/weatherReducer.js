import {api} from "../api/api";

const SET_HOURLY_WEATHER = "SET_HOURLY_WEATHER";
const SET_NOW_WEATHER = "SET_NOW_WEATHER";
const SET_CITIES = "SET_CITIES";
const SET_LAT = "SET_LAT";
const SET_LON = "SET_LON";
const SET_TEMP_UNIT = "SET_TEMP_UNIT";
const SET_SEARCH_MODAL = "SET_SEARCH_MODAL";

const initialState = {
    nowWeather: null,
    hourlyWeather: null,
    cities: null,
    lat: 55.75,
    lon: 37.62,
    units: "metric",
    isSearchModalActive: false
}

const setHourlyWeather = (hourlyWeather) => {
    return {type: SET_HOURLY_WEATHER, hourlyWeather: hourlyWeather};
}

const setNowWeather = (nowWeather) => {
    return {type: SET_NOW_WEATHER, nowWeather: nowWeather};
}

export const setCities = (cities) => {
    return {type: SET_CITIES, cities: cities};
}

const setLat = (lat) => {
    return {type: SET_LAT, lat: lat};
}

const setLon = (lon) => {
    return {type: SET_LON, lon: lon};
}

export const setUnits = (units) => {
    if(units === "metric") return {type: SET_TEMP_UNIT, units: "imperial"};
    return {type: SET_TEMP_UNIT, units: "metric"};
}

export const setSearchModal = (isSearchModalActive) => {
    return {type: SET_SEARCH_MODAL, isSearchModalActive: isSearchModalActive};
}

export const fetchNowWeather = (lat, lon, lang, units) => async (dispatch) => {
    const response = await api.getNowWeather(lat, lon, lang, units);
    await dispatch(setNowWeather(response));
}

export const fetchHourlyWeather = (lat, lon, lang, units) => async (dispatch) => {
     const response = await api.getWeekWeather(lat, lon, lang, units);
     await dispatch(setHourlyWeather(response));
}

export const fetchCities = (inputValue) => async (dispatch) => {
    dispatch(setSearchModal(true));
    const response = await api.getCities(inputValue, 5);
    if(!response[0]?.country) dispatch(setSearchModal(false));
    await dispatch(setCities(response));
}

export const setCoordinates = (lat, lon) => (dispatch) => {
    dispatch(setSearchModal(false));
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
        case SET_TEMP_UNIT: {
            return {...state, units: action.units};
        }
        case SET_SEARCH_MODAL: {
            return {...state, isSearchModalActive: action.isSearchModalActive};
        }
        default:
            return state;
    }
}

export default weatherReducer;