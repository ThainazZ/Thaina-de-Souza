import styled from 'styled-components';


export const MenuList = styled.ul`

display: flex;
gap: 10rem;

@media  (max-width: 360px) {
    display: flex;
    gap: 1.5rem;
  }



`

export const ItemList = styled.li`
display: inline-block;
font-weight: 300;
font-size: 1.5rem;

@media  (max-width: 360px) {
    font-size: 1rem;
  }






a {
    color: white;
    text-decoration: none;
}


`