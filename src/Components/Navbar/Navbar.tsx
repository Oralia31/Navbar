import React, { useState } from "react";
import { Sections } from "./Content";
import { Content, MainSection, NavMain } from "./Styles";
import ButtonNav from "../ButtonNav/ButtonNav";

export type SectionId = (typeof Sections)[number]["id"];

const Navbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<SectionId>("html");

  const handleOnclick = (id: string) => {
    setActiveButton(id);
  };

  return (
    <>
      <NavMain>
        <ButtonNav
          list={Sections}
          onClick={handleOnclick}
          idButton={activeButton}
        />
      </NavMain>
      <MainSection>
        {Sections.map((item, index) => (
          <Content key={index}>{item.id === activeButton && <p>{item.paragraph}</p>}</Content>
        ))}
      </MainSection>
    </>
  );
};

export default Navbar;
