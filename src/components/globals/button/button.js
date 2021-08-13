import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    text-transform: uppercase;
    background-color: ${(props) => (props.primary ? props.theme.colors.primary : "#fff")};
    padding: 0.8rem 1rem;
    border-radius: 3px;
    max-width: 100%;
    outline: none;
    border: none;
    color: ${(props) => (props.primary ? "#fff" : props.theme.colors.primary)};
    font-weight: 700;
    font-size: 0.7rem;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    margin: 0 auto;
    align-self: flex-start;

    &:focus,
    &:hover {
        filter: brightness(1.1);
        transition: filter ease-in-out 200ms;
    }
`;
