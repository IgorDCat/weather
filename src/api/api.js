import * as axios from "axios";


const instance = axios.default.create({
    baseURL: 'https://api.openweathermap.org/'
});

const apiId = "854bbfb87037263793eb4c4e98b2fc48";

export const api = {
    getNowWeather: (shir = 53.03, dolg = 158.66, lang, tempUnit="metric") => {
        return instance.get(`data/2.5/weather?lat=${shir}&lon=${dolg}&appid=${apiId}&lang=${lang}&units=${tempUnit}`).then(response => {
            console.log(response.data)
            return response.data
        })
    },

    getWeekWeather: (shir = 53.03, dolg = 158.66, lang, tempUnit="metric") => {
        return instance.get(`data/2.5/forecast?lat=${shir}&lon=${dolg}&appid=${apiId}&lang=${lang}&units=${tempUnit}`).then(response => {
console.log(response.data)
            return response.data
        })
    },

    getCities: (city, limit) => {
        return instance.get(`geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiId}`).then(response => {
            return response.data
        })
    }
}