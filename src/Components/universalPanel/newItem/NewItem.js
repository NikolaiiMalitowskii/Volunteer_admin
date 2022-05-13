import {NewItemStyled} from "./NewItemStyled";
import {useState} from "react";
import {getEditorIcon} from "../../../icons/editor.config";
import {useDispatch, useSelector} from "react-redux";
import PanelTemplate from "../panelTemplate/PanelTemplate";
import {rootConfigs} from "../../../redux/rootConfigs";

const createObjectWithFields = (fields) => {
    return fields.reduce((acc, field) => {
        acc[field.alias] = '';
        return acc
    }, {})
}

const getType = (field) => {
    switch (field) {
        case 'email':
            return 'email';
        case 'password':
            return 'password';
        default:
            return 'text'
    }
}

const NewItem = ({newItem, buttons, toggleNewItemForm, schema}) => {
    const dispatch = useDispatch()
    const [item, setItem] = useState(createObjectWithFields(newItem.fields));
    const error = useSelector(rootConfigs[schema.collectionName].error);
    // const isLoading = useSelector(rootConfigs[schema.collectionName].isLoading)

    const onHandleChange = (e) => {
        error && dispatch(rootConfigs[schema.collectionName].setError(''))
        const {name, value} = e.target;
        setItem(prev => ({...prev, [name]: value}))
    }

    const onHandleReset = () => {
        error && dispatch(rootConfigs[schema.collectionName].setError(''))
        setItem(createObjectWithFields(newItem.fields))
    };
    const closeForm = async () => {
        error && dispatch(rootConfigs[schema.collectionName].setItemByID(null));
        toggleNewItemForm();
    }

    const onHandleSubmit = () => dispatch(newItem.addItemOperation(item, closeForm))

    const getButtons = () => {
        return buttons
            ? buttons
            : [
                {text: 'cancel', action: toggleNewItemForm},
                {text: 'reset', action: onHandleReset},
                {text: 'save', action: onHandleSubmit},
            ]
    }

    return (
        <NewItemStyled isButtonsList={getButtons().length > 1}>
            <PanelTemplate icon={newItem.headerIcon} title={newItem.headerText}>
                {error && <p className='newItemError'>{error}</p>}
                {newItem.fields.map(field =>
                    <label key={field.alias} className='newItemFieldLabel'>
                        <span className='newItemFieldTitle'>{field.title}</span>
                        <input type={getType(field.alias)} className="newItemInput" name={field.alias}
                               onChange={onHandleChange}
                               value={item[field.alias]}/>
                    </label>)}
                <div className="newItemButtonList">
                    {getButtons().map((button, idx) =>
                        <button className="newItemButtonItem" onClick={button.action} key={idx}>
                            {button.icon && <div className="panelBodyBottomButtonsItemIconContainer">
                                <svg className='panelBodyBottomButtonsItemIcon'>
                                    <use href={getEditorIcon(button.icon)}/>
                                </svg>
                            </div>}
                            <span className='panelBodyBottomButtonsItemTitle'>{button.text}</span>
                        </button>)
                    }
                </div>
            </PanelTemplate>
        < /NewItemStyled>
    )
}

export default NewItem