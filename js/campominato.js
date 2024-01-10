//recuperare la griglia da html
const grid = document.getElementById("grid")

//rows e cols
const rows = 10
const cols = 10
const totalCells = rows * cols

for (let i = 1; i < totalCells; i++) {
    //cella
    const cell = document.createElement("div")
    cell.className = "cell"
    //aggiungere in pagina
    grid.appendChild(cell)
}
