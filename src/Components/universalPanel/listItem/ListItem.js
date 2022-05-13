import {ListItemStyled} from "./ListItemStyled";
import {getEditorIcon} from "../../../icons/common";
import {useLocation, useNavigate} from 'react-router-dom';


const checkTitleLength = (title) => title.length > 20 ? `${title.slice(0,20)}...` : title

const ListItem = ({item, schema}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const getDetails = () => navigate(`${location.pathname}/${item._id}`, {state: {from: location.pathname}});
    return (
        <ListItemStyled>
            <div className="filteredItemsListItemWrapper">
                <div className="filteredItemsListItemTitleContainer">
                    {schema.icon &&
                        <div className="filteredItemsListIconContainer">
                            <svg className='filteredItemsListIcon'>
                                <use href={getEditorIcon(schema.icon)}/>
                            </svg>
                        </div>}
                    <p className="filteredItemsListItemTitle">{checkTitleLength(item[schema.title])}</p>
                </div>
                <div className="jkk">
                    <div className='panelHeaderIconsItem' onClick={getDetails}>
                        <svg className='panelHeaderIcon'>
                            <use href={getEditorIcon('file')}/>
                        </svg>
                    </div>
                </div>
            </div>
        </ListItemStyled>
    )
}
export default ListItem