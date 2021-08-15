import { useState, useEffect } from "react";
import { CardWrapper, CardFront, CardBack } from "./card.elements";

const Card = ({ icon, index, tag, handleGetPairs }) => {
    const [flipCard, setFlipCard] = useState(true);
    const [unflip, setUnflip] = useState(false);

    const handleClick = (e) => {
        if (!e.currentTarget.dataset.hidden) {
            setFlipCard((flipCard) => !flipCard);
            handleGetPairs(e);
        }
    };

    const handleUnflip = () => {
        let attributes = Array.from(document.querySelectorAll("[id^='card']"));

        setTimeout(() => {
            attributes.map((x) => {
                if (x.hasAttribute("unflip")) {
                    setUnflip(true);
                }
                return true;
            });
        }, 1000);
    };

    useEffect(() => {
        unflip === true && setFlipCard(false);
    }, [unflip]);

    return (
        <CardWrapper
            id={index}
            flipcard={flipCard}
            data-tag={tag}
            onClick={(e) => {
                handleClick(e);
                handleUnflip();
            }}
        >
            <CardFront>{icon}</CardFront>
            <CardBack>&#129299;</CardBack>
        </CardWrapper>
    );
};

export default Card;
