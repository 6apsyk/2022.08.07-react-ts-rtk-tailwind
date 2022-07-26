import { AppDispatch } from "..";
import axios from "../../axios";
import { IAirport } from "../../models/models";
import { fetchError, fetching, fetchSuccess } from "../slices/airportSlice";


export const fetchAirport = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(fetching())
        const response = await axios.get<IAirport[]>('post')
        dispatch(fetchSuccess(response.data))
    } catch (error) {
        dispatch(fetchError(error as Error))
    }
}