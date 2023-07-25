import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/FUNDO.png';

//estilo global da tela

const globalStyle = createGlobalStyle `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    .example::-webkit-scrollbar {
        display: none;
      }
}

body {
    font-family: 'Quicksand', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-image: url(${backgroundImage});

    .example::-webkit-scrollbar {
        display: none;
      }

}

html {
    scroll-behavior: smooth;
 
}




`;

export default globalStyle;