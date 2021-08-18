import styled from "styled-components";
import { Wrapper } from "../globals/wrapper/wrapper";

export const DashboardWrapper = styled(Wrapper)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding-top: 8vh;
    /* background: #fff; */
    background-image: linear-gradient(190deg, #b721ff 0%, #21d4fd 100%);
`;

export const Action = styled.nav`
    display: flex;
    margin-top: 40px;
    width: 600px;
    justify-content: space-between;
`;
