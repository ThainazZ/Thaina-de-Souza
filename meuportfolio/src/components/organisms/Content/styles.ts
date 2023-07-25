import styled from "styled-components";

export const Container = styled.div `

display: flex;
align-items: center;
justify-content: center;
padding-top: 2.5rem;
gap: 2.5rem;

@media  (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

`;


