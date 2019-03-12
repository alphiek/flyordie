import styled from "styled-components";
import { color } from "../../GlobalCss/variables";

export const NavContainer = styled.nav`
  height: 100vh;
  width: 4em;
  position: absolute;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 700;
  background-color: ${color.primary};
  transform: scaleY(1);
  transform-origin: bottom;
  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
`;

export const LinkWrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 991px) {
    height: 50vh;
  }
`;

export const LinkRotate = styled.div`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  margin-top: 1.5em;
  margin-bottom: 2.5em;
  text-align: center;
  @media (max-width: 991px) {
    transform: rotate(0deg);
    margin-top: 5%;
    margin-bottom: 5%;
    width:100%;
  }
  @media (max-height: 500px) {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  @media screen
      and (max-width: 480px)
      and (max-height:800px)
      and (orientation:landscape) {
        margin-top: 2%;
        margin-bottom: 2%;
      }
`;

export const Close = styled.div`
  text-align: center;
  padding-top: 0.2em;
  padding-bottom: 0.3em;
  top: 0;
  font-size: 3.5em;
  color: ${color.secondary};
  margin-bottom: 0.5em;
  cursor:pointer;

  @media (max-width: 991px) {
    margin-bottom:0.5em;
  }
  @media (max-height:500px) {
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom:0.3em;
    margin-top: -5%;

  }
`;
