import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import weatherReducer from "./weatherReducer";


const rootReducer = combineReducers ({
    weather: weatherReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;