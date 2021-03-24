import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import empty from "is-empty";

import DirectionComponent from "../../components/Direction";
import IngredientComponent from "../../components/Ingredient";
import { selectRecipes } from "../../reducers/recipes";
import { selectSpecials } from "../../reducers/specials";
import { Ingredient, Recipe } from "../../types";

import "./index.scss";

interface ParamTypes {
  recipeID: string;
}

const RecipesDetailPage = () => {
  const history = useHistory();
  const allRecipes = useSelector(selectRecipes);
  const allSpecials = useSelector(selectSpecials);
  const { recipeID } = useParams<ParamTypes>();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    if (!empty(allRecipes)) {
      setRecipe(allRecipes.find(recipe => recipe.uuid === recipeID));
    } else {
      history.push("/");
    }
  }, [allRecipes, recipeID, history]);

  return (
    <div className="recipe-full">
      <div className="recipe-full-top">
        <div className="recipe-detail">
          <h2>{recipe?.title}</h2>
          {/* <span className="description">{recipe?.description}</span> */}
          <div className="recipe-detail-block">
            <span className="recipe-block-title">Preparation Time:</span>&ensp;
            <span className="recipe-block-text">{recipe?.prepTime} minutes</span>
          </div>
          <div className="recipe-detail-block">
            <span className="recipe-block-title">Cooking Time:</span>&ensp;
            <span className="recipe-block-text">{recipe?.cookTime} minutes</span>
          </div>
          <div className="recipe-detail-block">
            <span className="recipe-block-title">Servings:</span>&ensp;
            <span className="recipe-block-text">{recipe?.servings}</span>
          </div>

          <h4 className="ingredient-title">Ingredients</h4>
          <div className="ingredients">
            {recipe?.ingredients.map((ingredient: Ingredient) => (
              <IngredientComponent
                key={ingredient.uuid}
                ingredient={ingredient}
                special={allSpecials.find(special => special.ingredientId === ingredient.uuid)}
              />
            ))}
          </div>
        </div>
        <img src={`http://localhost:3001/${recipe?.images.full}`} alt="" />
      </div>
      <div className="recipe-full-bottom">
        <h4>Directions</h4>
        <ul className="directions">
          {recipe?.directions.map(direction => (
            <DirectionComponent key={direction.instructions} direction={direction} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipesDetailPage;
