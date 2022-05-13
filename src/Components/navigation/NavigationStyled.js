import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  .navigationList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navigationListItem:not(:last-child) {
    //margin-right: 20px;
    margin-bottom: 5px;
  }
  
  .navigationListItem {
    font-size: 18px;
  }
  
  .activeLink {
    text-transform: uppercase;
    color: red;
    text-decoration: none;
    font-weight: 600;
  }

  .simpleLink {
    text-transform: uppercase;
    color: #5F86BE;
    text-decoration: none;
    font-weight: 600;
  

    &:hover {
      color: #5f73a1;
    }
  }
  .navigationListItemSignOut {
    text-transform: uppercase;
    font-weight: 600;
    color: #819ff5;
    
    &:hover {
      color: #5f73a1;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .navigationList {
      display: flex;
      flex-direction: row;
    }
    .navigationListItem:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
  //@media (min-width: 1024px) {
  //
  //}
`
