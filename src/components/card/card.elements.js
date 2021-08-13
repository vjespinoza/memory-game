import styled from "styled-components";
import { Wrapper } from "../globals/wrapper/wrapper";

export const CardWrapper = styled(Wrapper)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: #fff;
    box-shadow: ${(props) => props.theme.colors.shadow};
    width: 75px;
    height: 90px;
    cursor: pointer;
    border-radius: 3px;
`;
