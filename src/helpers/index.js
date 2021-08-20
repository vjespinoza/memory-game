export const sortCards = (arr) => {
    arr.map((card, i) => {
        return (card.sortedBy = Math.floor(Math.random() * 1000));
    });
    arr.sort((a, b) => {
        return a.sortedBy - b.sortedBy;
    });

    return arr;
};

//Gameplay timer

let playTime;

export const timer = (state, func) => {
    let HH = 0;
    let MM = 0;
    let SS = 0;
    let count = state;

    playTime = setTimeout(() => {
        func((state) => state + 1);
    }, 1000);

    SS = count % 60;
    MM = count > 59 ? Math.floor((count % 3600) / 60) : 0;
    HH = count > 59 ? Math.floor(count / 3600) : 0;

    let time = {
        hh: HH.toString().padStart(2, "0"),
        mm: MM.toString().padStart(2, "0"),
        ss: SS.toString().padStart(2, "0"),
    };

    return time;
};

export const stopTimer = () => {
    clearTimeout(playTime);
};
