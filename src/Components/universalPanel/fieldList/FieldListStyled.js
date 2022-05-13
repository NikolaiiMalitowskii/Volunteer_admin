import styled from "styled-components";

export const FieldListStyled = styled.div`
  width: 100%;
  
  .fieldListItem {
    
    //&:not(:last-child) {
      border-bottom: 1px solid #E5E6E6;  
    //}
  }
  
  .fieldItemString {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  .fieldTitle {
    color: #5F86BE;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .fieldItemArray {
    
  }
  .fieldItemArrayTitle {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #E5E6E6;
    padding: 0 10px;
  }
  .fieldItemArrayTitleIconContainer {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
  .fieldItemArrayTitleIcon {
    width: 100%;
    height: 100%;
    fill: #5F86BE;
  }
  .fieldItemArrayList {
    padding: 10px;
  }
  .fieldItemArrayListItem {
    
  }

`