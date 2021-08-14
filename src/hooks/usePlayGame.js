import { useState, useEffect } from "react";

const usePlayGame = () => {
    // Cards to be matched
    const [currentPair, setCurrentPair] = useState({});
    // History of current pairs
    const [history, setHistory] = useState([]);

    const handleGetPairs = (e) => {
        if (!currentPair.cards) {
            setCurrentPair({
                ...currentPair,
                cards: { ...currentPair.cards, a: e.currentTarget.dataset.tag },
            });
            e.currentTarget.setAttribute("data-visible", true);
        } else {
            setCurrentPair({
                ...currentPair,
                cards: { ...currentPair.cards, b: e.currentTarget.dataset.tag },
            });
            e.currentTarget.setAttribute("data-visible", true);

            handleBlockCards(e);
        }
    };

    const handleBlockCards = (e) => {
        let notVisibles = Array.from(document.querySelectorAll("[id^='card']"));
        notVisibles.map((x) => {
            if (!x.hasAttribute("data-visible")) {
                console.log("qqq");
                x.setAttribute("data-hidden", true);
            }
        });
    };

    return { handleGetPairs, currentPair };
};

export default usePlayGame;
