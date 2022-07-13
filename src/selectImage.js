import weatherImg1d from "./assets/list_of_icons/01d.png"
import weatherImg1n from "./assets/list_of_icons/01n.png"
import weatherImg2d from "./assets/list_of_icons/02d.png"
import weatherImg2n from "./assets/list_of_icons/02n.png"
import weatherImg3d from "./assets/list_of_icons/03d.png"
import weatherImg3n from "./assets/list_of_icons/03n.png"
import weatherImg4d from "./assets/list_of_icons/04d.png"
import weatherImg4n from "./assets/list_of_icons/04n.png"
import weatherImg9d from "./assets/list_of_icons/09d.png"
import weatherImg9n from "./assets/list_of_icons/09n.png"
import weatherImg10d from "./assets/list_of_icons/10d.png"
import weatherImg10n from "./assets/list_of_icons/10n.png"
import weatherImg11d from "./assets/list_of_icons/11d.png"
import weatherImg11n from "./assets/list_of_icons/11n.png"
import weatherImg13d from "./assets/list_of_icons/13d.png"
import weatherImg13n from "./assets/list_of_icons/13n.png"
import weatherImg50d from "./assets/list_of_icons/50d.png"
import weatherImg50n from "./assets/list_of_icons/50n.png"

export const selectImg = (img) => {
    switch (img) {
            case "01n": {return weatherImg1n}
            case "02d": {return weatherImg2d}
            case "01d": {return weatherImg1d}
            case "02n": {return weatherImg2n}
            case "03d": {return weatherImg3d}
            case "03n": {return weatherImg3n}
            case "04d": {return weatherImg4d}
            case "04n": {return weatherImg4n}
            case "09d": {return weatherImg9d}
            case "09n": {return weatherImg9n}
            case "10d": {return weatherImg10d}
            case "10n": {return weatherImg10n}
            case "11d": {return weatherImg11d}
            case "11n": {return weatherImg11n}
            case "13d": {return weatherImg13d}
            case "13n": {return weatherImg13n}
            case "50d": {return weatherImg50d}
            case "50n": {return weatherImg50n}
            default:
                return null;
        }
    }