import axios from "axios";
import {createRide, getRidesList, setRidesError, setRidesLoading} from "./ridesActions";
import {getToken} from "../auth/authSelectors";

export const getRidesListOperation = (page = 1, pageSize = 100) => async (dispatch, getState) => {
    dispatch(setRidesLoading())
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken(getState())}`;
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/rides`,
            {params: {page, pageSize}}
        );
        dispatch(getRidesList(response.data.rides))
    } catch (error) {
        console.log(error)
        // dispatch(setRidesError())
    } finally {
        dispatch(setRidesLoading())
    }
}

export const createRideOperation = (ride) => async (dispatch, getState) => {
    dispatch(setRidesLoading())
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken(getState())}`;
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/rides`, ride);
        console.log(response)
        // dispatch(createRide(response.data.rides))
    } catch (error) {
        console.log(error)
        // dispatch(setRidesError())
    } finally {
        dispatch(setRidesLoading())
    }
}
