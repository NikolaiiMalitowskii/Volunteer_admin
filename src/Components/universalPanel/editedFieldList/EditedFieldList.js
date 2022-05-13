import {EditedFieldListStyled} from "./EditedFieldListStyled";
import {useState} from "react";
import EditedFieldListItem from "./editedFieldListItem/EditedFieldListItem";

const EditedFieldList = ({fields, item}) => {


    return (
        <EditedFieldListStyled>
            <ul>
                {fields.map(field => <EditedFieldListItem field={field} item={item} key={field.alias}/>)}
            < /ul>

        </EditedFieldListStyled>
    )
}

export default EditedFieldList