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
                    cards: {
                        ...currentPair.cards,
                        b: e.currentTarget.dataset.tag,
                    },
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

    const handlePlayGame = () => {
        let currentMatch = history[history.length - 1];

        const removeAttribute = () => {
            Array.from(document.querySelectorAll("[id^='card']")).map((x) => {
                return (
                    x.removeAttribute("data-hidden") &
                    x.removeAttribute("data-visible")
                );
            });
        };

        const handleMatches = (match) => {
            let style = `opacity: 0;
                visibility: hidden;
                transition: all ease-in-out 500ms;
                `;
            let visibleCards = Array.from(
                document.querySelectorAll("[data-visible]")
            );

            visibleCards.map((x) => {
                if (match) {
                    setTimeout(() => {
                        x.setAttribute("style", style);
                        removeAttribute();
                    }, 1000);
                }
                if (!match && visibleCards.length === 2) {
                    setTimeout(() => {
                        // Something
                        x.setAttribute("unflip", true);
                    }, 1000);
                    setTimeout(() => {
                        removeAttribute();
                    }, 1500);
                }

                return true;
            });
        };

        if (history.length > 0 && !currentMatch.match) {
            handleMatches(currentMatch.match);
        } else if (history.length > 0 && currentMatch.match) {
            handleMatches(currentMatch.match);
        }
    };

    useEffect(() => {
        currentPair.cards && handleMatchHistory();
    }, [currentPair]);

    useEffect(() => {
        history.length > 0 && handlePlayGame();
    }, [history]);

    return { handleGetPairs, currentPair, history };
};

export default usePlayGame;
