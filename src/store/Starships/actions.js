export const CHANGE_STARSHIPS = "CHANGE_STARSHIPS";
export const ADD_STARSHIP = "ADD_STARSHIP"

export const changeStarships = (newPlanets) => {
  return {
    type: CHANGE_STARSHIPS,
    value: newPlanets,
  };
};

export const addStarship = (newStarship) => {
  return {
    type: ADD_STARSHIP,
    value: newStarship,
  };
};

export const fetchStarshipsAsyc = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        dispatch(changeStarships(data.results))
      });
  };
};