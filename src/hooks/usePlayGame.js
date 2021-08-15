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
            handleBlockedCards(e);
        }
    };

    const handleBlockedCards = (e) => {
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
            setCurrentPair({});
        }
    };

    const handlePlayActions = () => {
        let attributes = Array.from(document.querySelectorAll("[id^='card']"));

        const removeAttribute = () => {
            attributes.map((x) => {
                return x.removeAttribute("data-hidden") & x.removeAttribute("data-visible");
            });
        };

        const removePairs = () => {
            let styles = `
            opacity: 0;
            visibility: hidden;
            transition: all ease-in-out 200ms;
            transition-delay: 1000ms
            `;

            attributes.map((x) => {
                if (x.hasAttribute("data-visible")) {
                    x.setAttribute("style", styles);
                }
                return true;
            });
        };

        const handleNoMatch = () => {
            attributes.map((x) => {
                if (x.hasAttribute("data-visible")) {
                    x.setAttribute("unflip", true);
                }
                return true;
            });
        };

        if (history[history.length - 1].match === true) {
            removePairs();
            removeAttribute();
        } else {
            handleNoMatch();
            removeAttribute();
        }

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

    useEffect(() => {
        history.length > 0 && handlePlayActions();
    }, [history]);

    return { handleGetPairs, currentPair };
};

export default usePlayGame;
