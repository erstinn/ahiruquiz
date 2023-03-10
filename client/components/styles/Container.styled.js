import styled from "styled-components";

//[Card shadows] https://alvarotrigo.com/shadow-gradients/

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.1rem);
  grid-gap: 1rem 1rem;
  margin-top: 5rem;
  //margin-right: -0rem;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem 0.5rem 0.5rem 1rem;
  
  @media (min-width: ${(props)=> props.theme.screenSizes.sm}){
    grid-template-columns: repeat(3, 18rem);
    grid-gap: 0.9rem 0.1rem;
  }
  
  @media (min-width: ${(props)=> props.theme.screenSizes.md}){
    grid-gap: 1rem 1rem;
  }

  @media (min-width: ${(props)=> props.theme.screenSizes.lg}){
    grid-template-columns: repeat(4, 18rem);
    grid-gap: 1rem 1rem;
  }

  @media (min-width: ${(props)=> props.theme.screenSizes.xl}){
    margin-top: 3rem;
    grid-gap: 2rem 5rem;
  }
  @media (min-width: ${(props)=> props.theme.screenSizes.xxl}){
    margin-top: 3rem;
    grid-gap: 2rem 20rem;
  }


`;