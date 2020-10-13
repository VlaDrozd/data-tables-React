import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeopleAsyc } from './../../store/People/actions';
import { People } from "./People";
import { PeopleForm } from "./PeopleForm";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(store => store.people);

  useEffect(() => {
    if(!people.results.length) dispatch(fetchPeopleAsyc());
  }, [dispatch, people]);

  return (
    <div>
      <People people={people} />
      <PeopleForm dispatcher={dispatch}></PeopleForm>
    </div>
  );
};
