import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanetsAsyc } from './../../store/Planets/actions';
import { Planets } from './Planets'; 

export const PlanetsPage = () => {
  const dispatch = useDispatch();
  const planets = useSelector((store) => store.planets);

  useEffect(() => {
    if (!planets.results.length) dispatch(fetchPlanetsAsyc());
  }, [dispatch, planets]);

  return (
    <div>
      <Planets planets={planets} />
    </div>
  );
};
