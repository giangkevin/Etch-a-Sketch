function createGrid(size) {
    const container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.style.cssText = "display : flex; border : 1px solid black; flex : 1";
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.style.cssText = "display : flex; border : 1px solid black; flex : 1 ";
            column.className = "column";
            row.appendChild(column);
        }
    }
}


createGrid(5);