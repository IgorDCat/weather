import * as axios from "axios";


const instance = axios.default.create({
    baseURL: 'https://api.openweathermap.org/'
});

export const api = {
    getNowWeather: (shir = 53.03, dolg = 158.66, lang = 'ru') => {
        return instance.get(`data/2.5/weather?lat=${shir}&lon=${dolg}&appid=854bbfb87037263793eb4c4e98b2fc48&lang=${lang}&units=metric`).then(response => {
            console.log(response.data)
            return response.data
        })
    },

    getWeekWeather: (shir = 53.03, dolg = 158.66, lang = 'ru') => {
        return instance.get(`data/2.5/forecast?lat=${shir}&lon=${dolg}&appid=854bbfb87037263793eb4c4e98b2fc48&lang=${lang}&units=metric`).then(response => {

            return response.data
        })
    },

    getCities: (city, limit) => {
        return instance.get(`geo/1.0/direct?q=${city}&limit=${limit}&appid=854bbfb87037263793eb4c4e98b2fc48`).then(response => {
                        console.log(response.data)
            return response.data
        })
    }
}