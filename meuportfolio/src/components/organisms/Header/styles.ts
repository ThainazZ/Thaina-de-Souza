import styled from 'styled-components';
import media from 'styled-media-query';


export const Box = styled.header `
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10rem;
    align-items: center;

    ${media.lessThan("small")`
    min-width: 360px;
    gap: 2rem;
    align-items: center;
    flex-direction: column;
    



`};


`;