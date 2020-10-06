import React from "react";

export const Planets = ({ planets }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Name</th>
            <th scope="col">Climate</th>
            <th scope="col">Terrain</th>
            <th scope="col">Population</th>
          </tr>
        </thead>
        <tbody>
          {planets.results.map((elem, id) => (
            <tr key={elem.url}>
              <th scope="col">{id + 1}</th>
              <th scope="col">{elem.name}</th>
              <th scope="col">{elem.climate}</th>
              <th scope="col">{elem.terrain}</th>
              <th scope="col">{elem.population}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};