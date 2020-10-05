import { CHANGE_PEOPLE } from "./actions";
const defaultState = {
  results: [],
};

export const peopleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PEOPLE:
      return {
        results: action.results
      };
    default:
      return state;
  }
};
