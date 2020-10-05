import { ADD_PERSON, CHANGE_PEOPLE } from "./actions";
const defaultState = {
  results: [],
};

export const peopleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PEOPLE:
      return {
        ...state,
        results: action.value,
      };
    case ADD_PERSON:
      return {
        ...state,
        results: [...state.results, action.value],
      };
    default:
      return state;
  }
};
