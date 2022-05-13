import styled from "styled-components";

export const PanelTemplateStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #E5E6E6;
  border-radius: 14px;

  .panelTemplateHeader {
    height: 40px;
    background-color: #E5E6E6;
    border-radius: 14px 14px 0 0;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .panelTemplateHeaderContainer {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .panelTemplateHeaderIconContainer {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: #5F86BE;
  }
  .panelTemplateHeaderIcon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .panelTemplateTitle {
    color: #5F86BE;
    font-weight: 600;
    text-transform: uppercase;
  }
  .panelTemplateBody {
    padding: 5px;
  }
`