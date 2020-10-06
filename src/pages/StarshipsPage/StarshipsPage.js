import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Starships } from "./Starships";
import { fetchStarshipsAsyc } from './../../store/Starships/actions';

export const StarshipsPage = () => {
  const dispatch = useDispatch();
  const starships = useSelector((store) => store.starships);

  useEffect(() => {
    if (!starships.results.length) dispatch(fetchStarshipsAsyc());
  }, [dispatch, starships]);

  return (
    <div>
      <Starships starships={starships} />
    </div>
  );
};
