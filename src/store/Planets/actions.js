export const CHANGE_PLANETS = "CHANGE_PLANETS";

export const changePlanets = (newPlanets) => {
  return {
    type: CHANGE_PLANETS,
    value: newPlanets,
  };
};