import React, { useEffect } from "react";
import AirportCard from "../components/AirportCard";
import AirportFilter from "../components/AirportFilter";
import AirportSearch from "../components/AirportSearch";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAirport } from "../store/actions/airportActions";
import ReactPaginate from "react-paginate";

const ITEM_PER_PAGE = 10;

function MainPage() {
    const dispatch = useAppDispatch();
    const { error, loading, airports } = useAppSelector(state => state.airport);

    const pageCount = ITEM_PER_PAGE;

    const pageClickHandler = ({ selected }: { selected: number }) => {
        // console.log(event);
    };

    useEffect(() => {
        dispatch(fetchAirport(100));
    }, [dispatch]);

    return (
        <div className="container mx-auto max-w-[768px] pt-5">
            <AirportSearch />
            <AirportFilter />

            {loading && <p className="text-center text-lg">Loading...</p>}
            {error && <p className="text-center text-lg text-red-600">Error...</p>}

            {airports.map(airport => (
                <AirportCard key={airport.id} airport={airport} />
            ))}
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={pageClickHandler}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName="flex"
                pageClassName="py-1 px-2 border mr-2"
                previousClassName="py-1 px-2 border mr-2"
                nextClassName="py-1 px-2 border"
                activeClassName="bg-gray-500 text-white"
            />
        </div>
    );
}

export default MainPage;
