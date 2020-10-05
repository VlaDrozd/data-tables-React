export const CHANGE_PLANETS = "CHANGE_PLANETS";

export const changePlanets = (newPlanets) => {
  return {
    type: CHANGE_PLANETS,
    value: newPlanets,
  };
};

export const fetchPlanetsAsyc = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        dispatch(changePlanets(data.results))
      });
  };
};