const container = document.getElementById('container')

function drawGrid (sides=16) {
    container.replaceChildren()
    let sideSetting = Math.min(sides, 100)
    for (let i=0; i<sideSetting; i++) {
        let gridRow = document.createElement('div')
        gridRow.className = 'gridRow'
        
        for (let i=0; i<sideSetting; i++) {
            let gridSquare = document.createElement('div')
            gridSquare.className = 'gridSquare'
            gridRow.append(gridSquare)
            gridSquare.style.backgroundColor = 'rgb(255,255,255)'
        }
        container.appendChild(gridRow)
    }
    resizeGrid(sideSetting)
    addPen()
}

function addPen() {
    const allGridSquares = document.querySelectorAll('.gridSquare')


    console.log(activeColor)
    allGridSquares.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if (activeColor==='black') {
                item.style.backgroundColor = 'rgb(0,0,0)'
                console.log(item.style.backgroundColor)
            } else if (activeColor==='rainbow') {
                item.style.backgroundColor = generateRandomRGBColor()
                console.log(item.style.backgroundColor)
            // } else if (activeColor==='spraypaint') {
            //     if (item.style.backgroundColor !== 'rgb(0,0,0)') {
            //         item.style.backgroundColor = 'rgb(0,0,0)'
            //         item.style.opacity = 0
            //     } else if (item.style.backgroundColor==='rgb(0,0,0)' && item.style.opacity===1) {
            //         item.style.opacity = 0
            //     }
            //     //we need to add 10% more color? how do you darken an existing color if not opacity?
            //     item.style.opacity = parseFloat(item.style.opacity) +0.1
            //     console.log(item.style.backgroundColor)
            } else if (activeColor==='darkener') {
                item.style.backgroundColor = generateColorBrightnessChange(item.style.backgroundColor, -10)
                console.log(item.style.backgroundColor)
            }
            
            })           

        })
}


function resizeGrid (sides=16) {
    let rows = document.querySelectorAll('.gridRow')
    rows.forEach((row) => row.style.height = (100/sides)+'%')

    let squares = document.querySelectorAll('.gridSquare')
    squares.forEach((square) => square.style.width = (100/sides)+'%')
}

function promptGridSize () {
    let input = prompt("Please input the number of sides per grid you want.")
    drawGrid(input)    
}

function generateRandomRGBColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')'

    return rgbColor
}

function generateColorBrightnessChange(color, percentage) {

    // Extract RGB values
    console.log('Found color:'+color)
    let rgbValues = color.match(/\d+/g);
    let r = parseInt(rgbValues[0], 10);
    let g = parseInt(rgbValues[1], 10);
    let b = parseInt(rgbValues[2], 10);

    // Calculate darkened color
    //I didn't like the percentage method... just doing in chunks of 255 seems more useful
    r = Math.round(r + (255 * (percentage / 100)));
    g = Math.round(g + (255 * (percentage / 100)));
    b = Math.round(b + (255 * (percentage / 100)));

    // Ensure values are within valid range (0-255)
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    // Construct the darkened color string
    let darkenedColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    return darkenedColor;


}


document.querySelector('#setGridBtn').addEventListener('click', promptGridSize)

let activeColor = 'black'

let setBlackColorBtn = document.querySelector('#setBlackColor')
setBlackColorBtn.addEventListener('click', () => {
    activeColor = 'black'
})

let setRainbowColorBtn = document.querySelector('#setRainbowColor')
setRainbowColorBtn.addEventListener('click', () => {
    activeColor = 'rainbow'
})

// let setSprayPaintColorBtn = document.querySelector('#setSprayPaint')
// setSprayPaintColorBtn.addEventListener('click', () => {
//     activeColor = 'spraypaint'
// })

let setDarkenerColorBtn = document.querySelector('#setDarkener')
setDarkenerColorBtn.addEventListener('click', () => {
    activeColor = 'darkener'
})


drawGrid()

