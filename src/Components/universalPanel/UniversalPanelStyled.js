import styled from "styled-components";

export const UniversalPanelStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #E5E6E6;
  border-radius: 14px;

  .panelHeader {
    height: 40px;
    background-color: #E5E6E6;
    border-radius: 14px 14px 0 0;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .headerTitleContainer {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .panelHeaderTitleIconContainer {
    width: 23px;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: #5F86BE;
  }
  .panelHeaderIcon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .panelHeaderTitle {
    color: #5F86BE;
    font-weight: 600;
    text-transform: uppercase;
  }

  .panelHeaderIconsList {
    display: flex;
    align-items: center;
  }

  .panelHeaderIconsItem {
    width: 26px;
    height: 26px;
    padding: 4px;
    color: #C4C4C4;
    background-color: #FFFFFF;
    border-radius: 14px;
    border: 1px solid #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      color: #5F86BE;
      border: 1px solid #5F86BE;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  
  .panelHeaderTitle {
    color: #5F86BE;
    font-size: 14px;
  }

  .panelBody {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .panelBodyButtons {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: ${props=>props.isButtons ? '5px 0' : '0'};
  }

  .panelBodyBottomButtonsItem {
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: center;
    border-radius: ${props => props.isList ? '0' : '14px'};
    border-right: ${props => props.isList ? '1px solid white' : 'none'};
  }

  .panelBodyBottomButtonsItem:first-child {
    border-radius: ${props => props.isList ? '14px 0 0 14px' : '14px'};
  }

  .panelBodyBottomButtonsItem:last-child {
    border-radius: ${props => {
      console.log(props)
      return props.isButtons>=2 ? '0 14px 14px 0' : '14px'
    }};
    border-right: none;
  }

  .panelBodyBottomButtonsItemIconContainer {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }


  .panelBodyBottomButtonsItemIcon {
    width: 100%;
    height: 100%;
    fill: white;
  }

  .panelBodyBottomButtonsItemTitle {
    margin-top: 2px;
  }


  .rightHeaderPanel {
    display: flex;
    align-items: center;
  }

  // filter

  .filterIconContainer {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .filterIcon {
    width: 100%;
    height: 100%;
    fill: #C4C4C4;
  }

  .filterContainer {
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-left: 10px;
    color: #C4C4C4;

    &:hover {
      color: #E5E6E6;
    }
  }

  .filterInputElement {
    border: 1px solid #C4C4C4;
    width: 250px;
    height: 26px;

    &:hover {
      border: 1px solid #5F86BE;
    }
  }
  
  // mobileFilter
  .mobileFilter{
    height: 40px;
    width: 100%;
    background-color: #E5E6E6;
    display: flex;
    align-items: center;
    padding: 0 5px 0 10px;
  }
  .mobileFilterIconContainer {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobileFilterIcon {
    width: 100%;
    height: 100%;
    fill: #C4C4C4;
  }

  .mobileFilterContainer {
    display: flex;
    width: 100%;
    align-items: center;
    color: #C4C4C4;

    &:hover {
      color: #E5E6E6;
    }
  }

  .mobileFilterInputElement {
    border: 1px solid #C4C4C4;
    flex-grow: 1;
    height: 26px;

    &:hover {
      border: 1px solid #5F86BE;
    }
  }

  // list
  .filteredItemsList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
  }
  


  @media (min-width: 768px) {
    width: 100%;
    .panelHeaderTitle {
      color: #5F86BE;
      font-size: 18px;
    }

    // list
    .filteredItemsList {
      padding: 5px 5px 0 5px;
    }
    .panelBodyButtons {
      margin: 10px 0;
    }
    
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

`