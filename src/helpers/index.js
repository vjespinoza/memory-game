export const sortCards = (arr) => {
    arr.map((card, i) => {
        return (card.sortedBy = Math.floor(Math.random() * 1000));
    });
    arr.sort((a, b) => {
        return a.sortedBy - b.sortedBy;
    });

    return arr;
};
