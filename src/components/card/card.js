import { useState, useEffect } from "react";
import { CardWrapper, CardFront, CardBack } from "./card.elements";

const Card = ({ icon, index, tag, handleGetPairs, history }) => {
    const [flipCard, setFlipCard] = useState(true);

    const handleClick = (e) => {
        if (!e.currentTarget.dataset.hidden) {
            setFlipCard((flipCard) => !flipCard);
            handleGetPairs(e);
        }
    };

    useEffect(() => {
        if (history.length > 0) {
            let y = history[history.length - 1];
            if (!y.match && y.card_b !== "") {
                setTimeout(() => {
                    setFlipCard(true);
                }, 1000);
            }
        }
    }, [history]);

    return (
        <CardWrapper
            id={index}
            flipcard={flipCard}
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
