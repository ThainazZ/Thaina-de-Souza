import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/FUNDO.png';
import styled from 'styled-components';




//estilo global da tela

const globalStyle = createGlobalStyle `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${backgroundImage});
    background-repeat: none;
}

#root {
    
    

  
    
}

`;

export default globalStyle;