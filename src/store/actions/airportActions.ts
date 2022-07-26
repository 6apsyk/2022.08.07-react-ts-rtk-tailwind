import { AppDispatch } from "..";
import axios from "../../axios";
import { fetching } from "../slices/airportSlice";


export const fetchAirport = () => async(dispatch: AppDispatch) => {
    try {
        dispatch(fetching())
        const response = await axios.get('post')
        console.log(response.data)
        // return response.data
    } catch (error) {
        
    }
}