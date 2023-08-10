import styled from 'styled-components';


export const SelectionCard = styled.div`
  display: grid;
  background: white;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 7px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.2);
  position: relative;
  color: ${(props) => props.light ? props.theme.light.card : props.theme.dark.card};
  

  // @media (min-width: ${(props) => props.theme.screenSizes.sm}) {
  //   //margin-left: -1rem;
  //   //min-height: 10rem;
  //   //max-width: 10rem;
  // }
  //
  // @media (min-width: ${(props) => props.theme.screenSizes.md}) {
  //   margin-left: -0.5rem;
  //   height: 15rem;
  //   width: 17rem;
  // }
  //
  @media (min-width: ${(props) => props.theme.screenSizes.xl}) {
    min-height: 12rem;
    min-width: 20rem;
  }
  //
  // @media (min-width: ${(props) => props.theme.screenSizes.xxl}) {
  //   margin-left: -1rem;
  //   padding: 10rem;
  //   height: 20rem;
  //   width: 16rem;
  //   max-height: 20rem;
  // }

  //&:before {
  //  content: "";
  //  z-index: -1;
  //  position: absolute;
  //  top: -25px;
  //  right: -15px;
  //  bottom: 10px;
  //  left: 10px;
  //  background: linear-gradient(-280deg, #fff1b9 0%, #c8d1c8 100%);
  //  transform: translate3d(0px, 20px, 0) scale(0.95);
  //  filter: blur(0px);
  //  opacity: var(0.9);
  //  transition: opacity 0.3s;
  //  border-radius: inherit;
  //}
  //
  //

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

  &:hover{
    cursor: pointer;
  }
  
  }

`

