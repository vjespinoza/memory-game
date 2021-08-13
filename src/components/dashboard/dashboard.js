import { useState } from "react";
import PlayArea from "../playArea/playArea";
import { DashboardWrapper, Action } from "./dashboard.elements";
import cardData from "../../data/card-data";
import { sortCards } from "../../helpers";
import { Button } from "../globals/button/button";

const Dashboard = () => {
    const [cards, setCards] = useState(cardData);
    const [newSort, setNewSort] = useState("");

    const handleSortCards = () => {
        setCards(sortCards(cards));
        setNewSort(cards[0].name);
    };

    console.log(cards[0].tag === cards[16].tag);

    return (
        <DashboardWrapper>
            <PlayArea cards={cards} />
            <Action>
                <Button primary onClick={handleSortCards}>
                    New Game
                </Button>
                <Button>Exit Game</Button>
            </Action>
        </DashboardWrapper>
    );
};

export default Dashboard;
