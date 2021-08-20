import {
    ScoreWrapper,
    ScoreTitles,
    ScoreList,
    ScoreItem,
} from "./bestScores.elements";

const BestScores = ({ highScores, toggleHighScore }) => {
    return (
        <ScoreWrapper toggleHighScore={toggleHighScore}>
            {highScores.length > 0 ? (
                <>
                    <ScoreTitles>
                        <h4>Rank</h4>
                        <h4>Date</h4>
                        <h4>Attempts</h4>
                        <h4>Time</h4>
                    </ScoreTitles>
                    <ScoreList>
                        {highScores.map((score, i) => {
                            return (
                                <ScoreItem key={i}>
                                    <p>{i + 1}</p>
                                    <p>{score.date}</p>
                                    <p>{score.attempts}</p>
                                    <p>{score.time}</p>
                                </ScoreItem>
                            );
                        })}
                    </ScoreList>
                </>
            ) : (
                <h4>No high scores yet!</h4>
            )}
        </ScoreWrapper>
    );
};

export default BestScores;
