import React from "react";

const ListItem = (props) => {
  return (
    <li>
      <h2>State is: {props.name}</h2>
      <h3>Capital is {props.capital}</h3>
      <p>Abbreviation is {props.abbr}</p>
    </li>
  );
};

export default ListItem;
