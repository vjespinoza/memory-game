import styled from "styled-components";
import { Wrapper } from "../globals/wrapper/wrapper";

export const ScoreWrapper = styled(Wrapper)`
    flex-direction: column;
    position: absolute;
    bottom: 0;
    right: ${(props) => (props.toggleHighScore ? 0 : "-400px")};
    transition: all ease-in-out 200ms;
    background: #fff;
    padding: 40px;
    width: 400px;
    height: 485px;
    z-index: 10;
`;

export const ScoreTitles = styled(Wrapper)`
    display: grid;
    grid-template-columns: 1fr repeat(3, 2fr);
    grid-template-areas: "title1 title2 title3 title4";
    justify-items: center;
    padding: 0 0 10px 0;

    & h4:nth-of-type(1) {
        grid-area: title1;
    }
    & h4:nth-of-type(2) {
        grid-area: title2;
    }
    & h4:nth-of-type(3) {
        grid-area: title3;
    }
    & h4:nth-of-type(4) {
        grid-area: title4;
    }
`;

export const ScoreList = styled(Wrapper)`
    flex-direction: column;
    padding: 0;
    overflow-y: scroll;

    /* width */
    &::-webkit-scrollbar {
        width: 4px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const ScoreItem = styled(Wrapper)`
    display: grid;
    grid-template-columns: 1fr repeat(3, 2fr);
    grid-template-areas: "scores1 scores2 scores3 scores4";
    justify-items: center;
    padding: 10px 0;
    font-size: 0.9rem;

    & p:nth-of-type(1) {
        grid-area: scores1;
    }
    & p:nth-of-type(2) {
        grid-area: scores2;
    }
    & p:nth-of-type(3) {
        grid-area: scores3;
    }
    & p:nth-of-type(4) {
        grid-area: scores4;
    }
`;
