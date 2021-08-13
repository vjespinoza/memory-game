import {
    Recycle,
    LightbulbFlash,
    Game,
    Basketball,
    Umbrella,
    Leaf,
    Sword,
    MoonClear,
    Sun,
    Aliens,
    Ghost,
    Star,
    Alarm,
    ThumbUp,
    Headphone,
    Home4,
} from "@styled-icons/remix-line";

let attributes = {
    color: "#f72585",
    size: 40,
};

const cardData = [
    {
        id: 1,
        icon: <Recycle size={attributes.size} color={attributes.color} />,
    },
    {
        id: 2,
        icon: (
            <LightbulbFlash size={attributes.size} color={attributes.color} />
        ),
    },
    { id: 3, icon: <Game size={attributes.size} color={attributes.color} /> },
    {
        id: 4,
        icon: <Basketball size={attributes.size} color={attributes.color} />,
    },
    {
        id: 5,
        icon: <Umbrella size={attributes.size} color={attributes.color} />,
    },
    { id: 6, icon: <Leaf size={attributes.size} color={attributes.color} /> },
    { id: 7, icon: <Sword size={attributes.size} color={attributes.color} /> },
    {
        id: 8,
        icon: <MoonClear size={attributes.size} color={attributes.color} />,
    },
    { id: 9, icon: <Sun size={attributes.size} color={attributes.color} /> },
    {
        id: 10,
        icon: <Aliens size={attributes.size} color={attributes.color} />,
    },
    { id: 11, icon: <Ghost size={attributes.size} color={attributes.color} /> },
    { id: 12, icon: <Star size={attributes.size} color={attributes.color} /> },
    { id: 13, icon: <Alarm size={attributes.size} color={attributes.color} /> },
    {
        id: 14,
        icon: <ThumbUp size={attributes.size} color={attributes.color} />,
    },
    {
        id: 15,
        icon: <Headphone size={attributes.size} color={attributes.color} />,
    },
    { id: 16, icon: <Home4 size={attributes.size} color={attributes.color} /> },
];

export default cardData;
