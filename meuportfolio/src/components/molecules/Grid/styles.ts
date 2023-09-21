import styled from "styled-components";
import "../../../styles/variables.css";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const Box = styled.div`
  width: 350px;
  height: 350px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  font-weight: 300;
  border-radius: 10px;
  background: var(--secondary-linear);
  backdrop-filter: blur(30px);
  box-shadow: 0px 2px 30px 0px rgba(49, 10, 49, 0.5);

  @media (max-width: 640px) {
    width: 300px;
  }

  @media (min-width: 641px) and (max-width: 968px) {
    width: 300px;
  }
`;

export const Card = styled.div`
  margin: 2rem 2rem 0rem 2rem;
`;

export const Button = styled.button`
  margin: 1rem 1rem 1.5rem 1rem;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  outline: none;
  height: 3rem;
  width: 19rem;
  background: var(--secondary-linear);
  backdrop-filter: blur(30px);
  box-shadow: 0px 2px 30px 0px rgba(49, 10, 49, 0.5);

  &:hover {

    color: var(--hover-color);
  }
`;
