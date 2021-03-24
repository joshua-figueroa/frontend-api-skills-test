import React from "react";
import { Tag } from "rsuite";
import { Direction } from "../../types";

import "./index.scss";

interface DirectionProps {
  direction: Direction;
}

const DirectionComponent: React.FC<DirectionProps> = ({ direction }) => {
  return (
    <li className="direction">
      {direction.instructions}
      {direction.optional && <Tag color="violet">optional</Tag>}
    </li>
  );
};

export default DirectionComponent;
