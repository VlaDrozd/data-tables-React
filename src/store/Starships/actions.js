export const CHANGE_STARSHIPS = "CHANGE_STARSHIPS";

export const changeStarships = (newPlanets) => {
  return {
    type: CHANGE_STARSHIPS,
    value: newPlanets,
  };
};