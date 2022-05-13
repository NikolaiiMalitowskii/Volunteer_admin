import {FieldListStyled} from "./FieldListStyled";
import {getEditorIcon} from "../../../icons/editor.config";

const FieldList = ({fields, item}) => {
    return (
        <FieldListStyled>
            <ul>
                {fields.map(field => <li key={field.alias} className='fieldListItem'>
                    {field.type === "String" && item[field.alias] &&
                        <div className='fieldItemString'>
                            <span className='fieldTitle'>{field.title}</span>
                            <span>{item[field.alias]}</span>
                        </div>}
                    {field.type === "Array" &&
                        <div className='fieldItemArray'>
                            <div className="fieldItemArrayTitle">
                                {field.icon && <div className="fieldItemArrayTitleIconContainer">
                                    <svg className='fieldItemArrayTitleIcon'>
                                        <use href={getEditorIcon(field.icon)}/>
                                    </svg>
                                </div>}
                                <p className="panelHeaderTitle">{field.title}</p>
                            </div>
                            <ul className="fieldItemArrayList">
                                {!!item[field.alias].length
                                    ? item[field.alias].map(field =>
                                        <li className="fieldItemArrayListItem" key={field.title}></li>)
                                    : <li className="fieldItemArrayListItem">{`No ${field.title.toLowerCase()} yet`}</li>}
                            </ul>
                        </div>}
                </li>)}
            < /ul>
        </FieldListStyled>
    )
}
export default FieldList