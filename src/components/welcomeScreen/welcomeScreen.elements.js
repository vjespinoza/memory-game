import styled from "styled-components";
import { Wrapper } from "../globals/wrapper/wrapper";

export const WelcomeWrapper = styled(Wrapper)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 20;
    background-color: #e5e5f7;
    opacity: 0.8;
    background-image: repeating-radial-gradient(
            circle at 0 0,
            transparent 0,
            #e5e5f7 10px
        ),
        repeating-linear-gradient(#f7258555, #f72585);

    /* &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
    } */
`;

export const GameName = styled.h1`
    font-size: 5rem;
    font-family: "Fredoka One", cursive;
    color: ${({ theme }) => theme.colors.primary};
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4));
`;
