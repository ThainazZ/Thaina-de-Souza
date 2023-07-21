import styled from "styled-components";
import React from "react";
import media from "styled-media-query";


export const Container = styled.div `

display: flex;
align-items: center;
justify-content: center;
padding-top: 2.5rem;
gap: 2.5rem;

${media.lessThan("small")`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

`};

`;


