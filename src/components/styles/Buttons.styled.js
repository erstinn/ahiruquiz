import styled from 'styled-components';
import Theme from "./Theme.jsx";

export const EditButton = styled.button`
  opacity: 0.4%;
  background: #A1ABAC;
  color: black;
  //font: small;
  text-transform: uppercase;
  padding: 2px 4px 0px 4px;
  
  &:hover{
    background: ${(props)=> props.theme.color.lightBlue};
    color: white;
    opacity: 0.7;
    animation-duration: 2s;
  }
`
