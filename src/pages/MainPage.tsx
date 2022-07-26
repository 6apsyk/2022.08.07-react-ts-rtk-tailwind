import React, { useEffect } from "react";
import AirportCard from "../components/AirportCard";
import AirportFilter from "../components/AirportFilter";
import AirportSearch from "../components/AirportSearch";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAirport } from "../store/actions/airportActions";

function MainPage() {
    const dispatch = useAppDispatch();
    const { error, loading, airports } = useAppSelector(state => state.airport);

    useEffect(() => {
        dispatch(fetchAirport());
    }, []);

    return (
        <div className="container mx-auto max-w-[768px] pt-5">
            <AirportSearch />
            <AirportFilter />
            {airports.map(airport => (
                <AirportCard key={airport.id} airport={airport} />
            ))}
        </div>
    );
}

export default MainPage;
