import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  background-color: black;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 10px;
  align-items: center;
  position: relative;
  padding: 10px 6px 6px 6px;
  border: black 6px;

  .box:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-157deg, #ffd500 -100%, #00296b -100% );
    transform: translate3d(19px, 34px, 0) scale(1.02);
    filter: blur(43px);
    opacity: var(0.51);
    transition: opacity 0.3s;
    border-radius: inherit;
  }

  /* 
  * Prevents issues when the parent creates a 
  * stacking context. (For example, using the transform
  * property )
  */
  .box::after {
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