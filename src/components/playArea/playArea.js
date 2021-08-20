import { useState, useEffect } from "react";
import { PlayWrapper, GameInfo, GameBoard } from "./playArea.elements";
import Card from "../card/card";
import { timer } from "../../helpers";

const PlayArea = ({ cards, handleGetPairs, history }) => {
    const [timeCounter, setTimeCounter] = useState(0);
    const [time, setTime] = useState({
        hh: 0,
        mm: 0,
        ss: 0,
    });

    useEffect(() => {
        setTime(timer(timeCounter, setTimeCounter));
    }, [timeCounter]);

    return (
        <PlayWrapper>
            <GameInfo>
                <h3>Attempts: {history.length}</h3>
                <h3>
                    Remaining pairs:{" "}
                    {cards.length / 2 -
                        history.filter((x) => x.match === true).length}
                </h3>
                <h3>Player: Tarxaros</h3>
                <h3>Timer: {`${time.hh}:${time.mm}:${time.ss}`}</h3>
                <h3>High Scores</h3>
            </GameInfo>
            <GameBoard>
                {cards.map((card, i) => {
                    return (
                        <Card
                            key={i}
                            icon={card.icon}
                            index={card.name}
                            tag={card.tag}
                            handleGetPairs={handleGetPairs}
                            history={history}
                        />
                    );
                })}
            </GameBoard>
        </PlayWrapper>
    );
};

export default PlayArea;
