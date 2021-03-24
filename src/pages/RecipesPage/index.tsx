import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RecipeComponent from "../../components/Recipe";
import { getRecipes, selectRecipes } from "../../reducers/recipes";
import { getSpecials } from "../../reducers/specials";
import { Recipe } from "../../types";

import "./index.scss";

const RecipesPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    // Get recipes and specials on page load
    dispatch(getRecipes());
    dispatch(getSpecials());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="recipes-page">
      <h2>Recipes</h2>
      <div className="recipes">
        {recipes?.map((recipe: Recipe) => (
          <RecipeComponent key={recipe.uuid} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
