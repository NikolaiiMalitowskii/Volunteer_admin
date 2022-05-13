import {SubPanelStyled} from "./SubPanelStyled";
import {getEditorIcon} from "../../icons/editor.config";

const SubPanel = ({
                      children,
                      title = 'No title',
                      headerIcon = '',
                      headerButtons = [],
                      buttons = []
                  }) => {
    return (
        <SubPanelStyled  isList={buttons.length > 1}
                         isButtons={buttons.length}
                         isHeaderButtons={!headerButtons.length}
                         alignLeft={false}>
            <div className="subPanelHeader">
                <div className="subPanelHeaderWrapper">
                    {headerIcon && <div className="subPanelIconContainer">
                        <svg className='subPanelIcon'>
                            <use href={getEditorIcon(headerIcon)}/>
                        </svg>
                    </div>}
                    <p className='subPanelTitle'>{title}</p>
                </div>
                {headerButtons && <ul className="subPanelHeaderIconsList">
                    {headerButtons.map((button, idx) =>
                        <li className='subPanelHeaderIconsItem' key={idx} onClick={button.action}>
                            <svg className='subPanelHeaderIconFilled'>
                                <use href={getEditorIcon(button.icon)}/>
                            </svg>
                        </li>)}
                </ul>}
            </div>
            <div className="subPanelBody">
                {children}
                {buttons && <div className="subPanelBodyButtons">
                    {buttons.map((button, idx) =>
                        <button className="subPanelBodyBottomButtonsItem" onClick={button.action} key={idx}>
                            {button.icon && <svg className='subPanelBodyBottomButtonsItemIcon'>
                                <use href={button.icon}/>
                            </svg>}
                            {button.name}
                        </button>)}
                </div>}
            </div>

        </SubPanelStyled>
    )
}
export default SubPanel