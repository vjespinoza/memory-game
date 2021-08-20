import { useEffect, useState } from "react";

const useEndGame = () => {
    const [gameStats, setGameStats] = useState({});
    const [highScores, setHighScores] = useState([]);

    const getGameStats = () => {
        let attempts = document.getElementById("attempts").innerText;
        let time = document.getElementById("time").innerText;
        let date = new Date().toLocaleDateString();

        setGameStats({
            ...gameStats,
            attempts,
            time,
            date,
        });
    };

    useEffect(() => {
        Object.entries(gameStats).length > 0 &&
            setHighScores([...highScores, gameStats]);
    }, [gameStats]);

    return { getGameStats, highScores };
};

export default useEndGame;
