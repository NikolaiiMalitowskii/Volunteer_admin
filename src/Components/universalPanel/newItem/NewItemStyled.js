import styled from "styled-components";

export const NewItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #E5E6E6;
  border-radius: 14px;
  
  .newItemFieldTitle {
    color: #5F86BE;
    font-weight: 600;
  }
  
  .newItemBody {
    padding: 5px;
  }
  .newItemButtonList {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .newItemButtonItem {
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: center;
    border-radius: ${props => props.isButtonsList ? '0' : '14px'};
    border-right: ${props => props.isButtonsList ? '1px solid white' : 'none'};
  }

  .newItemButtonItem:first-child {
    border-radius: ${props => props.isButtonsList ? '14px 0 0 14px' : '14px'};
  }

  .newItemButtonItem:last-child {
    border-radius: ${props => props.isButtonsList ? '0 14px 14px 0' : '14px'};
    border-right: none;
  }

`