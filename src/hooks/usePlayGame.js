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
            if (!e.currentTarget.hasAttribute("data-visible")) {
                setCurrentPair({
                    ...currentPair,
                    cards: { ...currentPair.cards, b: e.currentTarget.dataset.tag },
                });
                e.currentTarget.setAttribute("data-visible", true); //May not be necessary
                handleBlockedCards(e);
            }
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
        let cards = Array.from(document.querySelectorAll("[id^='card']"));

        const removeAttribute = () => {
            cards.map((x) => {
                x.removeAttribute("data-hidden");
                x.removeAttribute("data-visible");
                x.removeAttribute("unflip");
                return true;
            });
        };

        const removePairs = () => {
            let styles = `
            opacity: 0;
            visibility: hidden;
            transition: all ease-in-out 200ms;
            transition-delay: 1000ms
            `;

            cards.map((x) => {
                if (x.hasAttribute("data-visible")) {
                    x.setAttribute("style", styles);
                }
                return true;
            });
        };

        const handleNoMatch = () => {
            cards.map((x) => {
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
            setTimeout(() => {
                removeAttribute();
            }, 3000);
        }

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
