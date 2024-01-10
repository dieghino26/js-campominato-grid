//recuperare la griglia da html
const grid = document.getElementById("grid")

//recupero il bottone play
const button = document.getElementById("button")

//rows e cols
const rows = 10
const cols = 10
const totalCells = rows * cols

button.addEventListener("click", function () {
    for (let i = 0; i < totalCells; i++) {
        //cella
        const cell = document.createElement("div")
        cell.className = "cell"
        cell.innerText = i + 1
        //aggiungere in pagina
        grid.appendChild(cell)

        cell.addEventListener("click", function () {
            cell.classList.toggle("clicked")
        })
    }



})
