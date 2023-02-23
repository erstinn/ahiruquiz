import styled from 'styled-components';
import Theme from './Theme.jsx'

// TODO
//  [] INHERITANCE OF STYLED COMPONENTS
//  []  FOR DELETE BUTTON


export const EditButton = styled.button`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  margin-left: 1rem;
  margin-top: 1rem;
  text-transform: uppercase;
  padding: 0.6rem 0.6rem 0.6rem 0.6rem;
  cursor: pointer;
  letter-spacing: 2px;
  border: solid #777 1px;
  opacity: 0.9;
  color: #777;
  z-index: 1; 
  transition: all 0.1s ease-in-out;
  border-radius: 1px;
  background: transparent;

  &.span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 5px;
    //transition: 0.5s ease-in-out;
    transition: 0.1s ease;
  }


  &:before, &:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: ${(props)=>props.theme.colors.blue};;
    //transition: all 0.1s ease-in-out;
    transition: all 0.1s ease;
  }

  &:before {
    height: 0;
    width: 0.2rem;
    top: 50%;
  }

  &:after {
    width: 0;
    height: 0.3rem;
    left: 50%;
  }

  &:hover:before {
    height: 100%;
    top: 0;
    background: ${(props)=>props.theme.colors.blue};;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    background: ${(props)=>props.theme.colors.blue};;
  }

  &:hover {
    background: transparent;
    border-color: transparent;
  }

  & span:hover {
    color: ${(props)=>props.theme.colors.yellow};
  }

  & span:before, & span:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #333;
    transition: all 0.1s ease-in-out;
  }

  & span:before {
    width: 0.1rem;
    height: 0;
    top: 50%;
  }

  & span:after {
    height: 0.1rem;
    width: 0;
    left: 50%;
  }

  & span:hover:before {
    height: 2.25rem;
    top: 0;
    background: ${(props)=>props.theme.colors.yellow};
  }

  & span:hover:after {
    width: 100%;
    left: 0;
    background: ${(props)=>props.theme.colors.yellow};
  }

  &:active {
    overflow: unset;
    color: white;
    background-color: ${(props)=>props.theme.colors.yellow};
    border-color: ${(props)=>props.theme.colors.yellow};
  }

  &:active:before, &:active:after {
    color: white;
    background-color: ${(props)=>props.theme.colors.yellow};
  }

  & span:active {
    color: white;
  }

  //when clicked
  & span:active:before, & span:active:after {
    background-color: ${(props)=>props.theme.colors.yellow};
  }

  &:focus {
    outline: none
  }


  @media (min-width: ${(props)=> props.theme.screenSizes.xl}){
    & span:hover:before {
      height: 2.5rem;
      top: 0;
      background: ${(props)=>props.theme.colors.yellow};
    }
    font-size: ${(props)=> props.theme.fontSizes.s};
  }
  @media (min-width: ${(props)=> props.theme.screenSizes.xxl}){
    & span:hover:before {
      height: 3.3rem;
      top: 0;
      background: ${(props)=>props.theme.colors.yellow};
    }
    font-size: ${(props)=> props.theme.fontSizes.m};
  }

`;

export const DeleteButton = styled.button`
  
`;
