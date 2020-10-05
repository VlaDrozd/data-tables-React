import { ADD_STARSHIP, CHANGE_STARSHIPS } from "./actions";
const defaultState = {
  results: [],
};

export const starshipsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_STARSHIPS:
      return {
        ...state,
        results: action.value,
      };
    case ADD_STARSHIP:
      return {
        ...state,
        results: [...state.results, action.value],
      };
    default:
      return state;
  }
};
