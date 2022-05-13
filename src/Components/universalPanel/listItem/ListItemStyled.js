import styled from "styled-components";

export const ListItemStyled = styled.li`

  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 5px 0 5px;
  &&:last-child {
    padding-bottom: 5px;
  }

  .filteredItemsListItemWrapper {
    width: 100%;
    height: 100%;
    border: 1px solid #E5E6E6;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;

    &:hover {
      border: 1px solid #C4C4C4;
      cursor: pointer;
    }
  }


  .headerTitleContainer {
    display: flex;
    align-items: center;
  }

  .filteredItemsListItemTitleContainer {
    display: flex;
    align-items: center;
  }

  .filteredItemsListIconContainer {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .filteredItemsListIcon {
    width: 100%;
    height: 100%;
    fill: #5F86BE;
  }

  .filteredItemsListItemTitle {
    color: #5F86BE;
    font-weight: 600;
  }

  @media (min-width: 768px) {

    width: 50%;
    padding: 5px;
    
  }

  @media (min-width: 1024px) {
  }
`