import { CHANGE_PEOPLE } from "./actions";
const defaultState = {
  results: [],
};

export const peopleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_PEOPLE:
      return {
        ...state,
        results: action.value
      };
    default:
      return state;
  }
};
