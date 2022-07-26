import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAirport } from "../../models/models"

interface IAirportState {
    loading: boolean,
    error: string,
    airports: IAirport[]
}

const initialState: IAirportState = {
    loading: false,
    error: '',
    airports: []
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        fetching(state){
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IAirport[]>){
            state.loading = false
            state.airports = action.payload  
        },
        fetchError(state, action: PayloadAction<Error>){
            state.loading= false
            state.error = action.payload.message
        },
    }
})

export const {fetching,fetchSuccess, fetchError} = airportSlice.actions
export default airportSlice.reducer