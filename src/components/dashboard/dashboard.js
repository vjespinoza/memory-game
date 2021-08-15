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

const Dashboard = () => {
    const [cards, setCards] = useState([]);
    const [sortTrigger, setSortTrigger] = useState(false);

    const { handleGetPairs } = usePlayGame();

    const handleSortTrigger = () => {
        setSortTrigger(true);
    };

    useEffect(() => {
        !sortTrigger ? setCards(cardData) : setCards(sortCards(cardData));
        setSortTrigger(false);
    }, [sortTrigger]);

    return (
        <DashboardWrapper>
            <PlayArea cards={cards} handleGetPairs={handleGetPairs} />
            <Action>
                <Button primary onClick={handleSortTrigger}>
                    New Game
                </Button>
                <Button>Exit Game</Button>
            </Action>
        </DashboardWrapper>
    );
};

export default Dashboard;
