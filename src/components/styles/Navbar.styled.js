import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props)=> props.theme.colors.turquoise}; 
  top: 0;
  left: 0;
  margin: -1rem -0.7rem;
  padding: 0 2rem;
  color: ${(props)=> props.theme.colors.yellow};
  
  width: 100%;
  height: 3rem;
  
  &.burger-menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    height: 100%;
    width: 4rem;
    background-color: ${(props)=> props.theme.colors.turquoise};
  }
  
  & ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
`;