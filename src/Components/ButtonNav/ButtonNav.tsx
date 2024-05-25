import React from "react";
import { AItems, LiItems, UlItems } from "./Styles";
import { ButtonNavProps } from "./Types";

const ButtonNav: React.FC<ButtonNavProps> = ({ list, onClick, idButton }) => {
  return (
    <UlItems>
      {list.map((item) => (
        <LiItems key={item.id}>
          <AItems
            isActive={idButton === item.id}
            href={`#${item.id}`}
            onClick={() => onClick(item.id)}
          >
            {item.heading}
          </AItems>
        </LiItems>
      ))}
    </UlItems>
  );
};

export default ButtonNav;
