import styled from "styled-components";

export const SubPanelStyled = styled.div`
  width: 100%;
  .subPanelHeader {
    height: 40px;
    background-color: #E5E6E6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 10px -10px;
  }

  .subPanelHeaderWrapper {
    display: flex;
    align-items: center;
  }

  .subPanelIconContainer {
    width: 24px;
    height: 24px;
    padding: 3px;
    margin-right: 10px;
  }

  .subPanelIcon {
    width: 100%;
    height: 100%;
    fill: #5F86BE;
  }

  .subPanelTitle {
    color: #5F86BE;
    font-weight: 600;
    text-transform: uppercase;
  }

  .subPanelHeaderIconsList {
    display: flex;
    align-items: center;
  }

  .subPanelHeaderIconsItem {
    width: 28px;
    height: 28px;
    padding: 3px;
    color: #5F86BE;
    background-color: #C4C4C4;
    border-radius: 4px;
    padding: 5px;

    &:hover {
      cursor: pointer;
      color: #36366C;
    }
  }

  .subPanelHeaderIconFilled {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  
  .subPanelBodyButtons {
    display: flex;
    justify-content: center;
    margin-top: ${props=>props.isButtons ? '10px': '0'};
  }

  .subPanelBodyBottomButtonsItem {
    display: flex;
    align-items: center;
    font-weight: 600;
    width: 110px;
    justify-content: center;
    border-radius: ${props => props.isList ? '0' : '14px'};
    border-right: ${props => props.isList ? '1px solid white' : 'none'};
  }

  .subPanelBodyBottomButtonsItem:first-child {
    border-radius: ${props => props.isList ? '14px 0 0 14px' : '14px'}; 
  }

  .subPanelBodyBottomButtonsItem:last-child {
    border-radius: ${props => props.isList ? '0 14px 14px 0' : '14px'};
    border-right: none;
  }
  .subPanelBodyBottomButtonsItemIcon {
    width: 12px;
    height: 12px;
    margin-right: 10px;
    fill: white;

`