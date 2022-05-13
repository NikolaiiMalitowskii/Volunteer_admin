import {createAction} from "@reduxjs/toolkit";

export const getRidesList = createAction('rides/getRidesList');
export const createRide = createAction('rides/createRide');
export const getRideInfoByID = createAction('rides/getRideInfoByID');
export const updateRide = createAction('rides/updateRide');
export const updateRideStatus = createAction('rides/updateRideStatus');

export const setRidesLoading = createAction('rides/setRidesLoading');
export const setRidesError = createAction('rides/setRidesError');

export const setRidesFilter = createAction('rides/setRidesFilter')