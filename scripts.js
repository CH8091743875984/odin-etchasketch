const container = document.getElementById('container')

function drawGrid (sides=16) {
    container.replaceChildren()
    for (let i=0; i<sides; i++) {
        let gridRow = document.createElement('div')
        gridRow.className = 'gridRow'
        
        for (let i=0; i<sides; i++) {
            let gridSquare = document.createElement('div')
            gridSquare.className = 'gridSquare'
            gridRow.append(gridSquare)
        }
        container.appendChild(gridRow)
    }
    resizeGrid(sides)
    addPen()
}

function addPen() {
    const allGridSquares = document.querySelectorAll('.gridSquare')

    allGridSquares.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'black'
        })
    })
}

function resizeGrid (sides=16) {
    let rows = document.querySelectorAll('.gridRow')
    rows.forEach((row) => row.style.height = (100/sides)+'%')

    let squares = document.querySelectorAll('.gridSquare')
    squares.forEach((square) => square.style.width = (100/sides)+'%')
}

drawGrid()