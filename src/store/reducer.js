import { combineReducers } from "redux";
import { peopleReducer } from './People/reducers';
import { planetsReducer } from './Planets/reducers';
import { starshipsReducer } from './Starships/reducers';

export default combineReducers(
    {
        people: peopleReducer,
        planets: planetsReducer,
        starships: starshipsReducer
    }
)

