export const CHANGE_PEOPLE = "CHANGE_PEOPLE";
export const ADD_PERSON = "ADD_PERSON";

export const changePeople = (newPersons) => {
  return {
    type: CHANGE_PEOPLE,
    value: newPersons,
  };
};

export const addPerson = (newPerson) => {
  return {
    type: ADD_PERSON,
    value: newPerson,
  };
};

export const fetchPeopleAsyc = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        dispatch(changePeople(data.results));
      });
  };
};
