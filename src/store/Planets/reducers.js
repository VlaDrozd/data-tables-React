import { ADD_PLANET, CHANGE_PLANETS } from "./actions";
const defaultState = {
  results: [],
};

export const planetsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PLANETS:
      return {
        ...state,
        results: action.value,
      };
    case ADD_PLANET:
      return {
        ...state,
        results: [...state.results, action.value],
      };
    default:
      return state;
  }
};
