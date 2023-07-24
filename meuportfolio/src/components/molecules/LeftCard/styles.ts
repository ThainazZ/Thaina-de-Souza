import styled from "styled-components";
import '../../../styles/variables.css';

export const Container = styled.div `

width: 500px;
height: 350px;
color: white;
display: flex;
font-weight: 300;
border-radius: 10px;
background: var(--secondary-linear);
backdrop-filter: blur(30px);
box-shadow: 0px 2px 30px 0px rgba(49, 10, 49, 0.50);

@media  (max-width: 360px) {
    width: 300px;

  }
`

export const image = styled.img `
    width: 15rem;
    height: 16.3rem;
    overflow: visible;
    object-fit: cover;
    margin-left: -5px;
    margin-top: 90px;
    position: relative;

@media  (max-width: 360px) {
    width: 200px;
    height: 200px;
    overflow: visible;
    object-fit: cover;
    margin-left: -20px;
    margin-top: 147px;
    position: relative;
  }


`

export const text = styled.div `

@media  (max-width: 360px) {
    width: 200px;
    height: 200px;
    overflow: visible;
    object-fit: cover;
    margin-left: -20px;
    margin-top: 147px;
    position: relative;
  }

`
