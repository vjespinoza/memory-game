export const sortCards = (arr) => {
    arr.map((card, i) => {
        return (card.sortedBy = Math.floor(Math.random() * 1000));
    });
    arr.sort((a, b) => {
        if (a.sortedBy < b.sortedBy) {
            return -1;
        }
        if (a.sortedBy > b.sortedBy) {
            return 1;
        }
        return 0;
    });

    return arr;
};
