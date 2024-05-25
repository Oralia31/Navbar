import styled from "styled-components";

export const UlItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin: 0;
  padding: 1rem;
`;

export const LiItems = styled.li`
  list-style: none;
`;

export const AItems = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  background-color: ${({ isActive }) => (isActive ? "#b472fa80;" : "unset")};
  padding: 1em 1.5em;
  border-radius: 40em;

  &:hover {
    background-color: #b472fa80;;
  }
`;
