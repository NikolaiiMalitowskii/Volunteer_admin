import styled, {keyframes} from "styled-components";
import transition from "styled-transition-group";

const anime = keyframes`
  0% {
    letter-spacing: 1em;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
`
export const Entrance = transition.h2`
   animation: ${anime} 2s linear infinite
`;

export const EntranceLogo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .titleFirst {
    text-transform: uppercase;
    color: red;
    margin-right: 4px;
    font-size: 32px;
  }
  .titleSecond {
    color: cornflowerblue;
    font-size: 32px;
  }
`