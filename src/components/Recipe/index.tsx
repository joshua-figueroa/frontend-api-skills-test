import React from "react";
import { useHistory } from "react-router";
import { format } from "date-fns";
import { Recipe } from "../../types";

import "./index.scss";

interface RecipeProps {
  recipe: Recipe;
}

const RecipeComponent: React.FC<RecipeProps> = ({ recipe }) => {
  const history = useHistory();

  return (
    <div className="recipe" onClick={() => history.push(`/view/${recipe.uuid}`)}>
      <img src={`http://localhost:3001/${recipe.images.medium}`} alt="" />
      <div className="recipe-details">
        <h4>{recipe.title}</h4>
        <span>{recipe.description}</span>
        <span>{recipe.cookTime + recipe.prepTime} minutes</span>
        <div className="date-posted">{format(new Date(recipe.postDate), "MMM dd | h:mm a")}</div>
      </div>
    </div>
  );
};

export default RecipeComponent;
