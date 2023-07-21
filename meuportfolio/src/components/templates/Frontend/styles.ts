import styled from 'styled-components';
import media from 'styled-media-query';




export const Container = styled.div `

   header {
    margin-top: 2rem;
    justify-content: center;
   }

   ${media.lessThan("small")`
    width: 100%;
    padding: 0;
    margin: 0;
    
`}

   

`;