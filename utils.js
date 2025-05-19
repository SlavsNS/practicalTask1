let dataStructure = "";

export function generateGroup(data) {
    for (let key of data) {
        if (typeof key === "object") {
            let groupElement = `<div class="titleWithBetsBlock">
        <div class="titleContainer"> 
            <span class="title">${key.title}</span>
    </div>
</div>`
            dataStructure += groupElement;
            generateBet(groupElement, key.bets);
        }
    }
    return dataStructure;
}

function generateBet(groupStructure, betStructure) {
    betStructure.forEach((elem) => {
        let betElement = `<div class="oddContainer">
            <span class="oddName">${elem.name}</span>
            <span class="odd">${elem.odd}</span>
</div>`
        dataStructure += betElement;
    })
}