import { useState } from "react";
import PlayArea from "../playArea/playArea";
import { DashboardWrapper } from "./dashboard.elements";
import cardData from "../data/card-data";

const Dashboard = () => {
    const [cards, setCards] = useState([...cardData, ...cardData]);

    return (
        <DashboardWrapper>
            <PlayArea cards={cards} />
        </DashboardWrapper>
    );
};

export default Dashboard;
