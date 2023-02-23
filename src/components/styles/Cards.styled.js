import styled from 'styled-components';


export const SelectionCard = styled.div`
  display: grid;
  background: white;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-height: 50rem;
  min-height: 10rem;
  max-width: 50rem;
  min-width: 14rem;
  position: relative;
  margin-left: -2rem;
  //for button animation:
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${(props)=> props.theme.screenSizes.sm}){
    margin-left: -1rem;
    height: 15rem;
    width: 15rem;
  }
  
  @media (min-width: ${(props)=> props.theme.screenSizes.md}){
    margin-left: -0.5rem;
    height: 15rem;
    width: 17rem;
  }

  @media (min-width: ${(props)=> props.theme.screenSizes.xl}){
    margin-left: -0.5rem;
    height: 17rem;  
    max-height: 22rem;
    width: 21rem;
  }

  @media (min-width: ${(props)=> props.theme.screenSizes.xxl}){
    margin-left: -1rem;
    padding: 10rem;
    height: 20rem;
    width: 16rem;
    max-height: 20rem;
  } 

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-120deg, #fdf4ca 0%, #f6cfbe 100%);
    transform: translate3d(0px, 20px, 0) scale(0.95);
    filter: blur(20px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
  }


`
