import { AppDispatch } from "..";
import axios from "../../axios";
import { IAirport } from "../../models/models";
import { fetchError, fetching, fetchSuccess } from "../slices/airportSlice";


export const fetchAirport = (limit = 10) => async(dispatch: AppDispatch) => {
    try {
        dispatch(fetching())
        const response = await axios.get<IAirport[]>('post', {
            params: {limit}
        })
        dispatch(fetchSuccess(response.data))
    } catch (error) {
        dispatch(fetchError(error as Error))
    }
}