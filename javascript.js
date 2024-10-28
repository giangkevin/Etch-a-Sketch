const container = document.querySelector(".container");

for(let row = 0; row < 16; row++){
    const div = document.createElement("div");
    div.style.border = "1px solid grey";
    div.style.flex = "1";
    container.appendChild(div);
}
