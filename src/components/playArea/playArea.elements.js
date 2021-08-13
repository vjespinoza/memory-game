import styled from "styled-components";
import { Wrapper } from "../globals/wrapper/wrapper";

export const PlayWrapper = styled(Wrapper)`
    flex-direction: column;
    align-content: space-between;
    width: 785px;
    border-radius: 5px;
    background: #fff;
    box-shadow: ${(props) => props.theme.colors.shadow};
`;

export const GameInfo = styled(Wrapper)`
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.greyDark};
    font-size: 0.8rem;
    color: #fff;
    justify-content: space-between;
`;

export const GameBoard = styled(Wrapper)`
    display: grid;
    width: 705px;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    width: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.greyDark};
`;
