export const CHANGE_PEOPLE = "CHANGE_PEOPLE";

export const changePeople = (results) => {
  return {
    type: CHANGE_PEOPLE,
    results
  };
};
