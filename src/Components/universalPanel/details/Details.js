import {DetailsStyled} from "./DetailsStyled";
import UniversalPanel from "../UniversalPanel";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {rootConfigs} from "../../../redux/rootConfigs";
import FieldList from "../fieldList/FieldList";
import EditedFieldList from "../editedFieldList/EditedFieldList";

const Details = ({collectionName}) => {
    const [isEdited, setEdited] = useState(false);
    const [fields, setFields] = useState(rootConfigs[collectionName].itemDetails.fields)
    const params = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const item = useSelector(rootConfigs[collectionName].itemByID);
    const header = rootConfigs[collectionName].itemDetails.header;

    const toggleEditForm = () => setEdited(prev => !prev)


    const goBack = () => {
        dispatch(rootConfigs[collectionName].setItemByID(null))
        navigate(`/${collectionName}`)
    }

    const saveEditedItem = () => {
    }

    useEffect(() => {
        dispatch(rootConfigs[collectionName].getItemByID(params.id))
    }, [])

    return (
        <DetailsStyled>

            {item && <UniversalPanel
                title={header.title}
                titleIcon={header.icon}
                headerButtons={isEdited
                    ? [
                        {
                            icon: 'save', action: saveEditedItem
                        }
                    ]
                    : [
                        {
                            icon: 'edit',
                            action: toggleEditForm
                        },
                        {
                            icon: 'bin',
                            action: () => console.log('hello')
                        },
                        {
                            icon: 'undo',
                            action: goBack
                        },
                    ]}
                bodyButtons={isEdited ? [
                    {icon: 'close', text: "Cancel", action: toggleEditForm},
                    {icon: 'save', text: "Save", action: saveEditedItem},
                ] : [
                    {icon: 'undo', text: "back to list", action: goBack}
                ]
                }>
                {!isEdited && <FieldList fields={fields} item={item}/>}
                {isEdited && <EditedFieldList fields={fields} item={item}/>}
            </UniversalPanel>}
        </DetailsStyled>
    )
}

export default Details