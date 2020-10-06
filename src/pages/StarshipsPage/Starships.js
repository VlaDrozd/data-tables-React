import React from "react";

export const Starships = ({ starships }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Name</th>
            <th scope="col">Passengers</th>
            <th scope="col">Hyperdrive rating</th>
            <th scope="col">Atmosphering speed</th>
          </tr>
        </thead>
        <tbody>
          {starships.results.map((elem, id) => (
            <tr key={elem.url}>
              <th scope="col">{id + 1}</th>
              <th scope="col">{elem.name}</th>
              <th scope="col">{elem.passengers}</th>
              <th scope="col">{elem.hyperdrive_rating}</th>
              <th scope="col">{elem.max_atmosphering_speed}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};