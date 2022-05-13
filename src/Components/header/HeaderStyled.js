import styled from "styled-components";
import transition from "styled-transition-group";

export const HeaderStyled = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid lightgray;
  
  .titleLink {
    text-decoration: none;
  }

  .titleFirst {
    text-transform: uppercase;
    color: red;
    margin-right: 4px;
  }

  .titleSecond {
    color: cornflowerblue;
  }

  @media (min-width: 768px) {
    padding: 0 20px;


  }
  @media (min-width: 1024px) {
    
  }
`

export const Title = transition.h2`
  &:appear { opacity: 0.01; }
  &:appear-active {
    opacity: 1;
    transition: opacity 1000ms ease-in;
  }
`;