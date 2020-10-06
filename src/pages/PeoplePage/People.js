import React from "react";

export const People = ({ people }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Name</th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {people.results.map((elem, id) => (
            <tr key={elem.url}>
              <th scope="col">{id + 1}</th>
              <th scope="col">{elem.name}</th>
              <th scope="col">{elem.height}</th>
              <th scope="col">{elem.mass}</th>
              <th scope="col">{elem.gender}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
