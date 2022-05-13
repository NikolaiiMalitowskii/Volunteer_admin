import {createAction} from "@reduxjs/toolkit";

export const getItems = createAction('common/getItems');
export const getItemByID = createAction('common/getItemByID');
export const updateItemByID = createAction('common/updateItemByID');