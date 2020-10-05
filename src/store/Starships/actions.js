export const CHANGE_STARSHIPS = "CHANGE_STARSHIPS";

export const changeStarships = (newPlanets) => {
  return {
    type: CHANGE_STARSHIPS,
    value: newPlanets,
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