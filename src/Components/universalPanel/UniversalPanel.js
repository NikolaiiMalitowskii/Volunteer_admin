import {UniversalPanelStyled} from "./UniversalPanelStyled";
import {getEditorIcon} from "../../icons/common";
import useDeviceSizes from "../../hooks/useDeviceSizes";
import ListItem from "./listItem/ListItem";
import {useDispatch} from "react-redux";
import {useState} from "react";
import Modal from "../modal/Modal";
import NewItem from "./newItem/NewItem";

const UniversalPanel = ({
                            children,
                            newItem = {
                                fields: [],
                                error: {getter: '', setter: () => null},
                                addItemOperation: () => null
                            },
                            title = 'No title',
                            titleIcon = 'bookmark',
                            headerButtons = [],
                            bodyButtons = [],
                            filter,
                            items = {
                                items: [],
                                schema: {
                                    collectionName: '',
                                    title: '',
                                    icon: 'bookmark',
                                    detailsFields: []
                                }
                            },
                        }) => {
    const {isMobileDevice} = useDeviceSizes();
    const dispatch = useDispatch();
    const [isNewItemFormOpen, setNewItemFormOpen] = useState(false);
    const toggleNewItemForm = () => setNewItemFormOpen(prev => !prev);
    const setFilterValue = (e) => dispatch(filter.setter(e.target.value));

    return (
        <UniversalPanelStyled isList={bodyButtons.length > 1}
                              isButtons={bodyButtons.length}
                              isHeaderButtons={!headerButtons.length}>
            <div className="panelHeader">
                <div className="headerTitleContainer">
                    {titleIcon && <div className="panelHeaderTitleIconContainer">
                        <svg className='panelHeaderIcon'>
                            <use href={getEditorIcon(titleIcon)}/>
                        </svg>
                    </div>}
                    <p className="panelHeaderTitle">{title}</p>
                </div>
                <div className="rightHeaderPanel">
                    {filter?.setter && !isMobileDevice && <div>
                        <label className="filterContainer">
                            <div className="filterIconContainer">
                                <svg className="filterIcon">
                                    <use href={getEditorIcon('search')}/>
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="filterInputElement"
                                placeholder='Enter filter'
                                value={filter.getter}
                                onChange={setFilterValue}
                            /></label>
                    </div>}
                    {headerButtons && <ul className="panelHeaderIconsList">
                        {headerButtons.map((button, idx) =>
                            <li className='panelHeaderIconsItem' key={idx} onClick={button.action}>
                                <svg className='panelHeaderIcon'>
                                    <use href={getEditorIcon(button.icon)}/>
                                </svg>
                            </li>)}
                        {!!newItem.fields.length && <li className='panelHeaderIconsItem' onClick={toggleNewItemForm}>
                            <svg className='panelHeaderIcon'>
                                <use href={getEditorIcon('plus')}/>
                            </svg>
                        </li>}
                    </ul>}
                </div>
            </div>
            {isMobileDevice && filter?.setter && <div className="mobileFilter">
                    <label className="mobileFilterContainer">
                        <div className="mobileFilterIconContainer">
                            <svg className="mobileFilterIcon">
                                <use href={getEditorIcon('search')}/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="mobileFilterInputElement"
                            placeholder='Enter filter'
                            value={filter.getter}
                            onChange={setFilterValue}
                        /></label>
            </div>}
            <div className="panelBody">
                {children}
                {!!items?.array?.length ? <ul className="filteredItemsList">
                    {items.array.map(item => <ListItem item={item} schema={items.schema} key={item.id || item._id}/>)}
                </ul> : <p className='filteredItemsListNoExist'>No items in this list yet</p>}

            </div>
            {!!bodyButtons?.length && <div className="panelBodyButtons">
                {bodyButtons.map((button, idx) =>
                    <button className="panelBodyBottomButtonsItem" onClick={button.action} key={idx}>
                        {button.icon && <div className="panelBodyBottomButtonsItemIconContainer">
                            <svg className='panelBodyBottomButtonsItemIcon'>
                                <use href={getEditorIcon(button.icon)}/>
                            </svg>
                        </div>}
                        <span className='panelBodyBottomButtonsItemTitle'>{button.text}</span>
                    </button>)}
            </div>}
            {isNewItemFormOpen &&
                <Modal closeModal={toggleNewItemForm}>
                    <NewItem newItem={newItem} toggleNewItemForm={toggleNewItemForm} schema={items.schema}/>
                </Modal>}

        </UniversalPanelStyled>
    )
}

export default UniversalPanel