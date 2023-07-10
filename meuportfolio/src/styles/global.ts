import { createGlobalStyle } from 'styled-components';




//estilo global da tela

const globalStyle = createGlobalStyle `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
    background-color: black;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    flex: 1;
}

body {
    font-family: 'Quicksand', sans-serif;
}

`

export default globalStyle;