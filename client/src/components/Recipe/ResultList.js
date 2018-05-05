import React from "react";

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id}>
        <img
          alt={result.title}
          className="img-fluid"
          src={result.recipe.image}
        />
        <a href={result.recipe.url}><h2>{result.recipe.label}</h2></a>
        {result.recipe.ingredients.map(ingredient => (
          <p>{ingredient.text}</p>
        ))}
      </li>
    ))}
  </ul>
);

export default ResultList;
