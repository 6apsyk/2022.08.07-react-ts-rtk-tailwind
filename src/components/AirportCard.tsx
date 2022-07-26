import React from "react";
import { IAirport } from "../models/models";

interface IAirportCardProps {
    airport: IAirport;
}

function AirportCard({ airport }: IAirportCardProps) {
    return <div>{airport.name}</div>;
}

export default AirportCard;
