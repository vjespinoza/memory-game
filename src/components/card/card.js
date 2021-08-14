import { useState } from "react";
import { CardWrapper, CardFront, CardBack } from "./card.elements";

const Card = ({ icon, index, tag, handleGetPairs }) => {
    const [flipCard, setFlipCard] = useState(false);

    const handleFlipcard = () => {
        setFlipCard((flipCard) => !flipCard);
    };

    return (
        <CardWrapper
            id={index}
            flipCard={flipCard}
            data-tag={tag}
            onClick={(e) => {
                handleFlipcard();
                handleGetPairs(e);
            }}
        >
            <CardFront>{icon}</CardFront>
            <CardBack>&#129299;</CardBack>
        </CardWrapper>
    );
};

export default Card;
