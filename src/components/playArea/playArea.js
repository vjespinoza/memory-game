import { useState, useEffect } from "react";
import { PlayWrapper, GameInfo, GameBoard } from "./playArea.elements";
import { Button } from "../globals/button/button";
import BestScores from "../bestScores/bestScores";
import Card from "../card/card";
import { timer, handleToggleHighScore } from "../../helpers";

const PlayArea = ({ cards, handleGetPairs, history, highScores }) => {
    const [toggleHighScore, setToggleHighScore] = useState(false);
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
            <BestScores
                highScores={highScores}
                toggleHighScore={toggleHighScore}
            />

            <GameInfo>
                <h3>
                    Attempts: <span id="attempts">{history.length}</span>
                </h3>
                <h3>
                    Remaining pairs:{" "}
                    {cards.length / 2 -
                        history.filter((x) => x.match === true).length}
                </h3>
                <h3>Player: Tarxaros</h3>
                <h3>
                    Timer:{" "}
                    <span id="time">{`${time.hh}:${time.mm}:${time.ss}`}</span>
                </h3>
                <Button
                    primary
                    noMargin
                    onClick={() =>
                        handleToggleHighScore(
                            toggleHighScore,
                            setToggleHighScore
                        )
                    }
                >
                    High Scores
                </Button>
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
