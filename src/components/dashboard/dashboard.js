import { useState, useEffect } from "react";
//Import cards data
import cardData from "../../data/card-data";
//Import components
import PlayArea from "../playArea/playArea";
import { Button } from "../globals/button/button";
import { DashboardWrapper, Action } from "./dashboard.elements";
//Import helpers functions and custom hooks
import { sortCards } from "../../helpers";
import usePlayGame from "./../../hooks/usePlayGame";
import useEndGame from "../../hooks/useEndGame";

const Dashboard = () => {
    const [cards, setCards] = useState([]);
    const [sortTrigger, setSortTrigger] = useState(false);

    const { handleGetPairs, history } = usePlayGame();

    const { getGameStats, highScores } = useEndGame();

    const handleSortTrigger = () => {
        setSortTrigger(true);
    };

    useEffect(() => {
        !sortTrigger ? setCards(cardData) : setCards(sortCards(cardData));
        setSortTrigger(false);
    }, [sortTrigger]);

    return (
        <DashboardWrapper>
            <PlayArea
                cards={cards}
                handleGetPairs={handleGetPairs}
                history={history}
                highScores={highScores}
            />
            <Action>
                <Button primary onClick={handleSortTrigger}>
                    New Game
                </Button>
                <Button onClick={getGameStats}>Exit Game</Button>
            </Action>
        </DashboardWrapper>
    );
};

export default Dashboard;
