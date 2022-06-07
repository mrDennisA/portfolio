import styled from "styled-components";

export const Content = styled.a`
  position: relative;
  overflow: hidden;
  display: flex;
  background-color: var(--grey95);
  width: 100%;
  height: 100vh;
  max-height: 200px;

  cursor: pointer;

  @media only screen and (min-width: 576px) {
    max-height: 300px;
  }

  @media only screen and (min-width: 768px) {
    height: unset;
    aspect-ratio: 1/1;
    max-height: 400px;
  }

  & > span {
    transition: var(--timer) ease-in-out;
  }

  :hover > span {
    transform: scale(1.2);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  transition: var(--timer) ease-in-out;

  :hover {
    background-color: var(--white80);
  }

  h4 {
    z-index: 1;
    position: relative;
    transform: scale(1.4);
    opacity: 0;
    padding: 0 1rem;
    transition: var(--timer) ease-in-out;
  }

  :hover > h4 {
    opacity: 1;
    transform: scale(1);
  }
`;
