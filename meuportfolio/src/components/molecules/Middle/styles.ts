import styled from "styled-components";
import media from 'styled-media-query';


export const Container = styled.div `

color: white;
text-align: center;
padding-top: 6rem;


${media.lessThan("small")`
    width: 50%;
    
`}

`