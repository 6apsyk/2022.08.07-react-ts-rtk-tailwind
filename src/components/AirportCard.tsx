import { useNavigate } from "react-router-dom";
import { IAirport } from "../models/models";
import styles from "./AirportCard.module.css";

interface IAirportCardProps {
    airport: IAirport;
}

function AirportCard({ airport }: IAirportCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/airport/${airport.id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <p className="text-lg font-bold">{airport.name}</p>
            <p>{airport?.region}</p>
            <p>{airport?.country}</p>
            <p>{airport?.ident}</p>
            <p>{airport?.type}</p>
        </div>
    );
}

export default AirportCard;
