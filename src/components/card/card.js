import { useState } from "react";
import { CardWrapper, CardFront, CardBack } from "./card.elements";

const Card = ({ icon, index, tag, handleGetPairs }) => {
    const [flipCard, setFlipCard] = useState(true);

    const handleClick = (e) => {
        if (!e.currentTarget.dataset.hidden) {
            setFlipCard((flipCard) => !flipCard);
            handleGetPairs(e);
        }
    };

    return (
        <CardWrapper
            id={index}
            flipCard={flipCard}
            data-tag={tag}
            onClick={(e) => {
                handleClick(e);
            }}
        >
            <CardFront>{icon}</CardFront>
            <CardBack>&#129299;</CardBack>
        </CardWrapper>
    );
};

export default Card;
