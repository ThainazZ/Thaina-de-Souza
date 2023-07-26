import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  gap: 10rem;

  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: 962px) {
    gap: 5rem;
  }
`;

export const ItemList = styled.li`
  display: inline-block;
  font-weight: 300;
  font-size: 1.5rem;

  @media (max-width: 640px) {
    font-size: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const MenuItemLink = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;
  font-size: 1.3rem;

  &:hover {
    transform: scale(1.2); 
  }
`;