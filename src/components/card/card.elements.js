import styled from "styled-components";

export const CardWrapper = styled.article`
    display: block;
    cursor: pointer;
    position: relative;
    width: 75px;
    height: 90px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 1s;
    transition: transform 1s;
    -webkit-transform: ${(props) => (props.flipCard ? "rotateY(180deg)" : "rotateY(0deg)")};
    transform: ${(props) => (props.flipCard ? "rotateY(180deg)" : "rotateY(0deg)")};
`;

export const CardFront = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: ${(props) => props.theme.colors.shadow};
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
`;

export const CardBack = styled.div`
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
`;
