import styled from "styled-components";
import '../../../styles/variables.css';

export const OcupationDiv = styled.div `

padding: 2% 2%;
margin: 0% 20%;
border: 1px solid var(--secondary-color);

@media  (max-width: 640px) {
   
   padding: 8% 15% 8%;
   
 }
 
 @media  (max-width: 962px) {
   
   padding: 5% 15%;
 }
`


export const Container = styled.div `

display: flex;
flex-direction: column;
color: white;
text-align: center;
padding-top: 1rem;
align-items: center;


@media  (max-width: 640px) {
   
    padding-top: 1rem;
    
  }

  @media  (max-width: 968px) {
   
    padding-top: 1rem;
    
  }

`

export const Cards = styled.div `
width: 300px;
height: 200px;
background: var(--secondary-linear);
backdrop-filter: blur(30px);
border-radius: 10px;

@media  (max-width: 640px) {
   
  width: 120px;
  height: 200px;
  
}

@media (min-width: 641px) and (max-width: 968px) {
  width: 200px;
  height: 200px;
}

`

export const Texts = styled.div `

padding: 5% 0% 2% 0%;

@media  (max-width: 640px) {
   
  padding: 8% 15% 8%;
  
}

@media  (max-width: 962px) {
  
  padding: 5% 15%;
}

`