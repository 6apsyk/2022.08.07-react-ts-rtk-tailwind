import { createSlice } from "@reduxjs/toolkit"
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

const airportSlice = createSlice({
    name: 'airport',
    
})