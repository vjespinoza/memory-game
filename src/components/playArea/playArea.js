import { PlayWrapper, GameInfo, GameBoard } from "./playArea.elements";
import Card from "../card/card";

const PlayArea = ({ cards, handleGetPairs }) => {
    return (
        <PlayWrapper>
            <GameInfo>
                <h3>Attempts: 10</h3>
                <h3>Remaining pairs: 16</h3>
                <h3>Player: Tarxaros</h3>
                <h3>Timer: 10:30:00</h3>
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
                        />
                    );
                })}
            </GameBoard>
        </PlayWrapper>
    );
};

export default PlayArea;
