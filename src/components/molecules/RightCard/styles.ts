import styled from "styled-components";
import '../../../styles/variables.css';

export const Container = styled.div `

width: 350px;
height: 350px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 300;
border-radius: 10px;
background: var(--secondary-linear);
backdrop-filter: blur(30px);
box-shadow: 0px 2px 30px 0px rgba(49, 10, 49, 0.50);

@media  (max-width: 640px) {
    width: 300px;
  }

  @media  (min-width: 641px) and (max-width: 968px) {
   
    width: 500px;
    
  }



`


