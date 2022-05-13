import {EditedFieldListItemStyled} from "./EditedFieldListItemStyled";
import {getEditorIcon} from "../../../../icons/editor.config";
import {useState} from "react";
import Modal from "../../../modal/Modal";
import PanelTemplate from "../../panelTemplate/PanelTemplate";
import CheckList from "../../checkList/CheckList";
import UniversalPanel from "../../UniversalPanel";
import {rootConfigs} from "../../../../redux/rootConfigs";

const EditedFieldListItem = ({field, item}) => {
    const [filter, setFilter] = useState('')
    const [isModalOpen, setModalOpen] = useState(false);

    const setFilterValue = (e) => {
        console.log(e.target)
        // setFilter(e.target.value)
    }

    const toggleModal = () => {
        setModalOpen(prev => !prev)
    }

    const headerButtons = [
        {icon: 'plus', action: toggleModal}
    ]
    return (
        <EditedFieldListItemStyled>

            {field.type === "String" && item[field.alias] &&
                <div className='fieldItemString'>
                    <span className='fieldTitle'>{field.title}</span>
                    <span>{item[field.alias]}</span>
                </div>}
            {field.type === "Array" &&
                <div className='fieldItemArray'>
                    <div className="fieldItemArrayTitle">
                        <div className="fieldItemPanel">
                            {field.icon && <div className="fieldItemArrayTitleIconContainer">
                                <svg className='fieldItemArrayTitleIcon'>
                                    <use href={getEditorIcon(field.icon)}/>
                                </svg>
                            </div>}
                            <p className="panelHeaderTitle">{field.title}</p>
                        </div>
                        {headerButtons &&
                            <ul className="panelHeaderIconsList">
                                {headerButtons.map((button, idx) =>
                                    <li className='panelHeaderIconsItem' key={idx}
                                        onClick={button.action}>
                                        <svg className='panelHeaderIcon'>
                                            <use href={getEditorIcon(button.icon)}/>
                                        </svg>
                                    </li>)}
                            </ul>}
                    </div>
                    <ul className="fieldItemArrayList">
                        {!!item[field.alias].length
                            ? item[field.alias].map(field =>
                                <li className="fieldItemArrayListItem" key={field.title}>
                                    // INSERT THERE PERMISSION
                                </li>)
                            :
                            <li className="fieldItemArrayListItem">{`No ${field.title.toLowerCase()} yet`}</li>}
                    </ul>
                </div>}
            {isModalOpen &&
                <Modal closeModal={toggleModal}>
                    <UniversalPanel
                        title={`Add ${field.itemTitle}`}
                        titleIcon={field.itemIcon}
                        headerButtons={[
                            {
                                icon: 'close',
                                action: toggleModal
                            }
                        ]}
                        bodyButtons={[
                            {icon: 'close', text: 'close', action: toggleModal}
                        ]}
                        filter={{getter: filter, setter: setFilterValue}}
                        // items={{
                        //     array: [],
                        //     schema: {
                        //         collectionName: 'users',
                        //         title: 'email',
                        //         icon: 'user',
                        //     },
                        //     actions: {
                        //         deleteItem: () => console.log('delete'),
                        //         editItem: () => console.log('edit'),
                        //     }
                        // }}
                    >
                        <CheckList />
                        <h2>Hello</h2>
                    </UniversalPanel>
                </Modal>}
        </EditedFieldListItemStyled>
    )
}
export default EditedFieldListItem