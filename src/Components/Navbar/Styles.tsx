import styled from "styled-components";

export const NavMain = styled.nav`
  //width: 45rem;
  height: 4.5rem;
  background-color: rgba(0, 0, 0, 0.36);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  margin: 1em auto 2em auto;
`;

export const UlItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  margin: 0;
`;

export const LiItems = styled.li`
  list-style: none;
`;

export const AItems = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  background-color: ${({ isActive }) => (isActive ? "#b472fa" : "unset")};

  &:hover {
    background-color: #b472fa;
    padding: 1em 1.5em;
    border-radius: 40em;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  margin: auto;
`;

export const Content = styled.div`
  width: 38rem;
  box-sizing: content-box;
  margin: auto;
  text-align: justify;
`;

/*.ul-items li {
    padding: 1rem;
    list-style: none;
}

.ul-items li a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
}

.ul-items li a:hover {
    background-color: #b472fa;
    padding: 1em 1.5em;
    border-radius: 40em;
}*/
