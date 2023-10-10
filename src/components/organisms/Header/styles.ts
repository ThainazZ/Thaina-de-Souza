import styled from 'styled-components';


export const Box = styled.header `
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10rem;
    align-items: center;

   @media  (max-width: 640px) {
    padding-top: 2%;
  }

  @media  (max-width: 962px) {
    gap: 5rem;
    padding-top: 2%;

  }


`;