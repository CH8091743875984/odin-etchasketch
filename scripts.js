
const container = document.getElementById('container')


for (let i=0; i<16; i++) {
    let gridRow = document.createElement('div')
    gridRow.className = 'gridRow'
    
    for (let i=0; i<16; i++) {
        let gridSquare = document.createElement('div')
        gridSquare.className = 'gridSquare'
        gridRow.append(gridSquare)
    }
    container.appendChild(gridRow)
}

//need a function to set border for right and bottom, nth child

const allGridSquares = document.querySelectorAll('.gridSquare')

allGridSquares.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black'
    })
})