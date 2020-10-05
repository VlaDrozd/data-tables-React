export const CHANGE_PEOPLE = "CHANGE_PEOPLE";

export const changePeople = (newPerson) => {
  return {
    type: CHANGE_PEOPLE,
    value: newPerson
  };
};

export const fetchPeopleAsyc = () => {
  return (dispatch) => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        dispatch(changePeople(data.results))
      });
  };
};