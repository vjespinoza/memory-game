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

    (function handleUnflip() {
        let attributes = Array.from(document.querySelectorAll("[id^='card']"));

        attributes.map((x) => {
            setTimeout(() => {
                if (x.hasAttribute("unflip")) {
                    setFlipCard(true);
                }
            }, 3000);
            return true;
        });
    })();

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
