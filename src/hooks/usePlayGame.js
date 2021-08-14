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
            e.currentTarget.setAttribute("data-visible", true); //May not be necessary
        } else {
            setCurrentPair({
                ...currentPair,
                cards: { ...currentPair.cards, b: e.currentTarget.dataset.tag },
            });
            e.currentTarget.setAttribute("data-visible", true); //May not be necessary
            handleBlockCards(e);
        }
    };

    const handleBlockCards = (e) => {
        let notVisibles = Array.from(document.querySelectorAll("[id^='card']"));
        notVisibles.map((x) => {
            if (!x.hasAttribute("data-visible")) {
                x.setAttribute("data-hidden", true);
            }

            return true;
        });
    };

    const handleMatchHistory = () => {
        let card_A = currentPair.cards.a;
        let card_B = currentPair.cards.b;
        let match = card_A === card_B;

        if (card_B) {
            setHistory([
                ...history,
                {
                    card_A: card_A,
                    card_b: card_B,
                    match: match,
                },
            ]);
        }
    };

    const handlePlayActions = () => {
        // 1) If history[history.length - 1].match === true
        // 1.1) remove data-visible and data.hidden
        // 1.2) add opacity 0 to matched cards
        // **************************************
        // 2) If history[history.length - 1].match === false
        // 2.1) remove data-visible and data.hidden
        // 2.2) setTimeout(() => {setFlipCard(false)}, 500ms)
        // **************************************
        // 3) Attempts => history.lentgh
        // **************************************
        // 4) Remaining pairs =>
        // (cards.length / 2) - (history.filter((x) => return x.match === true))
    };

    useEffect(() => {
        currentPair.cards && handleMatchHistory();
    }, [currentPair]);

    return { handleGetPairs, currentPair };
};

export default usePlayGame;
