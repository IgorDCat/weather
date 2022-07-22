import React, {useState} from "react";
import {fetchCities, setCoordinates, setSearchModal} from "../redux/weatherReducer";
import {useDispatch} from "react-redux";

const Search = (props) => {
    let [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const onSendInput = (e, inputValue) => {
        e.stopPropagation();
        if (inputValue !== "") {
            dispatch(fetchCities(inputValue));
            setInputValue("")
        }
    }

    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Enter your city..." value={inputValue}
                   onChange={(e) => setInputValue(e.currentTarget.value)}/>
            <button className="search__btn" onClick={(e) => onSendInput(e, inputValue)}>search</button>
            <div className={props.isSearchModalActive ? null : "nonactiveSearchModal"}
                 onClick={() => dispatch(setSearchModal(false))}>
                <ul className="search__list">
                    {props.cities ? props.cities.map(c => <li key={c.lat}
                                                              onClick={() => dispatch(setCoordinates(c.lat, c.lon))}>
                        {c.name}, <span>country:
                </span> {c.country}, <span>state:</span> {c.state}</li>) : null}
                </ul>
            </div>
        </div>
    )
}

export default Search;