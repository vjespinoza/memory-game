import { CardWrapper } from "./card.elements";

const Card = ({ icon, index }) => {
    return <CardWrapper id={index}>{icon}</CardWrapper>;
};

export default Card;
