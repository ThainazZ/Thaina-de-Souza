import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuList = styled.ul`

display: flex;
gap: 10rem;


${media.lessThan("small")`
max-width: 360px;
gap: 5rem;
`};


`

export const ItemList = styled.li`
display: inline-block;
font-weight: 300;
font-size: 1.5rem;


${media.lessThan("small")`
    margin-right: 0px;
    
`};




a {
    color: white;
    text-decoration: none;
}


`