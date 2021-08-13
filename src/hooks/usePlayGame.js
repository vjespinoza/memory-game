import { useState, useEffect } from "react";

const usePlayGame = () => {
    const [currentPair, setCurrentPair] = useState({
        card1: "",
        card2: "",
    });
    const [history, setHistory] = useState([]); // History of current pairs

    const handleGetPairs = (e) => {
        if (currentPair.card1 === "") {
            setCurrentPair({
                ...currentPair,
                card1: e.currentTarget.dataset.tag,
            });
        } else {
            setCurrentPair({
                ...currentPair,
                card2: e.currentTarget.dataset.tag,
            });
        }
    };

    const checkPairMatch = () => {
        if (history.length > 0) {
            console.log(history[history.length - 1]);
            console.log(history[history.length - 1].match);
        }
    };

    useEffect(() => {
        if (currentPair.card1 === currentPair.card2) {
            if (!Object.values(currentPair).includes("")) {
                setHistory([...history, { ...currentPair, match: true }]);
            }
        } else {
            if (!Object.values(currentPair).includes("")) {
                setHistory([...history, { ...currentPair, match: false }]);
            }
        }
    }, [currentPair]);

    useEffect(() => {
        checkPairMatch();
    }, [history]);

    return { handleGetPairs };
};

export default usePlayGame;
