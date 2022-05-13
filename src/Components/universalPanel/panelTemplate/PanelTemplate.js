import {PanelTemplateStyled} from "./PanelTemplateStyled";
import {getEditorIcon} from "../../../icons/common";

const PanelTemplate = ({icon='bookmark', title='no title', children}) => {
    return (
        <PanelTemplateStyled>
            <div className="panelTemplateHeader">
                <div className="panelTemplateHeaderContainer">
                    {icon && <div className="panelTemplateHeaderIconContainer">
                        <svg className='panelTemplateHeaderIcon'>
                            <use href={getEditorIcon(icon)}/>
                        </svg>
                    </div>}
                    <p className="panelTemplateTitle">{title}</p>
                </div>
            </div>
            <div className="panelTemplateBody">
                {children}
            </div>
        </PanelTemplateStyled>
    )
}
export default PanelTemplate