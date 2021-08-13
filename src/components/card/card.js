import { useState } from "react";
import { CardWrapper, CardFront, CardBack } from "./card.elements";
import {} from "@styled-icons/remix-line";

const Card = ({ icon, index }) => {
    const [flipCard, setFlipCard] = useState(true);

    const handleFlipcard = () => {
        setFlipCard((flipCard) => !flipCard);
    };

    return (
        <CardWrapper id={index} flipCard={flipCard} onClick={handleFlipcard}>
            <CardFront>{icon}</CardFront>
            <CardBack>&#129299;</CardBack>
        </CardWrapper>
    );
};

export default Card;
