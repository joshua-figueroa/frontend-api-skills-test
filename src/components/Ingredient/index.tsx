import React from "react";
import { Tag } from "rsuite";
import _ from "lodash";
import empty from "is-empty";
import { Ingredient, Special } from "../../types";

import "./index.scss";

interface IngredientProps {
  ingredient: Ingredient;
  special: Special | undefined;
}

const IngredientComponent: React.FC<IngredientProps> = props => {
  return (
    <div className="ingredient">
      <div className="ingredient-title">
        {!empty(props.special) && <Tag color="violet">{_.capitalize(props?.special?.type)}</Tag>}
        <span>
          {props.ingredient.amount} {!empty(props.ingredient.measurement) && `${props.ingredient.measurement} `}
          {props.ingredient.name}
        </span>
      </div>
      {!empty(props.special) && (
        <div className="ingredient-special">
          {props?.special?.title} - {props?.special?.text}
        </div>
      )}
    </div>
  );
};

export default IngredientComponent;
