window.onload = (event) => {
    const getBtn = document.getElementById('button-random-color');
    const colorElements = document.querySelectorAll('.color');
        
    colorElements[0].style.backgroundColor = 'black';
        
    function generateRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`
    }
        
    function generateRandomColorPalette() {
        const colorPalette = [generateRandomColor(), generateRandomColor(), generateRandomColor()];
        colorElements.forEach((element, index) => {
            if (index !== 0) {
                element.style.backgroundColor = colorPalette[index - 1];
            }
        });
        localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
    }

    getBtn.addEventListener('click', generateRandomColorPalette);
        
    function getSavedColorPalette() {
        const savedColorPalette = localStorage.getItem('colorPalette');
        if (savedColorPalette) {
            const colorPalette = JSON.parse(savedColorPalette);
            colorElements.forEach((element, index) => {
                if (index !== 0) {
                    element.style.backgroundColor = colorPalette[index - 1];
                }
            });
        } else {
            generateRandomColorPalette();
        }
    }
        
    getSavedColorPalette();
        
    for (const n in new Array(25).fill('0')) {
        const getContainer = document.getElementById('pixel-board');
        getContainer.innerHTML += '<div class="pixel"></div>';
    }
    const getBox = document.querySelectorAll('.pixel');
    for (let index = 0; index < getBox.length; index += 1) {
        getBox[index].style.backgroundColor = 'white';
        getBox[index].style.border = '1px solid black';
        getBox[index].style.width = '40px';
        getBox[index].style.height = '40px';
    }

    localStorage.setItem('selected', colorElements[0].style.backgroundColor);


        
    const colorElements2 = document.querySelectorAll('.color');
    colorElements2.forEach(color => color.classList.remove('selected'));
    localStorage.setItem('selected', colorElements2[0].style.backgroundColor);
    colorElements2[0].classList.add('selected');
    colorElements2[0].style.backgroundColor = localStorage.getItem('selected');
        
    const colorPalette = document.getElementById('color-palette');
    colorPalette.addEventListener('click', (event) => {
        colorElements2.forEach(color => color.classList.remove('selected'));
        event.target.classList.add('selected');
        let getColor = event.target.style.backgroundColor;
        localStorage.setItem('selected', getColor);
    })

    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.addEventListener('click', (event) => {
        event.target.style.backgroundColor = localStorage.getItem('selected');
    })

    const getClearButton = document.getElementById('clear-board');
    getClearButton.addEventListener('click', () => {
        const getBox = document.querySelectorAll('.pixel');
        for (let index = 0; index < getBox.length; index += 1) {
            getBox[index].style.backgroundColor = 'white';
        }
    })

    function saveBoard() {
        let pixelData = [];
        let pixels = document.querySelectorAll('.pixel');
        for (let pixel of pixels) {
            let pixelColor = pixel.style.backgroundColor;
            let pixelPosition = {
                x: pixel.offsetLeft,
                y: pixel.offsetTop
            }
            pixelData.push({color: pixelColor, position: pixelPosition});
        }
        localStorage.setItem('pixelBoard', JSON.stringify(pixelData));
    }

    function loadBoard() {
    let pixelData = JSON.parse(localStorage.getItem('pixelBoard'));
    if(pixelData){
    for (let pixel of pixelData) {
        let pixelElement = document.elementFromPoint(pixel.position.x, pixel.position.y);
        pixelElement.style.backgroundColor = pixel.color;
        pixelElement.classList.add('painted');
        }
    }
    }

    pixelBoard.addEventListener('click', saveBoard);

    const boardSize = document.getElementById('board-size');
    const pixelsBoard = document.querySelector('#pixel-board');
    if (boardSize.value === "") {
        const pixelBoardSize = localStorage.getItem('boardSize');
        pixelsBoard.style.display = "grid";
        pixelsBoard.style.gridTemplateColumns = `repeat(${pixelBoardSize}, 40px)`;
    }
    
    boardSize.addEventListener('change', () => {
        localStorage.setItem('boardSize', boardSize.value);
    })

    const generateBoard = document.getElementById('generate-board');

    generateBoard.addEventListener('click', () => {
        if (boardSize.valueAsNumber < 5) {
            boardSize.valueAsNumber = 5;
            localStorage.setItem('boardSize', boardSize.valueAsNumber);
        } 
        if (boardSize.valueAsNumber > 50) {
            boardSize.valueAsNumber = 50;
            localStorage.setItem('boardSize', boardSize.valueAsNumber);
        }
        const arrayPixels = document.getElementById('pixel-board');
        while (arrayPixels.firstChild) {
            arrayPixels.removeChild(arrayPixels.firstChild);
        }
        const pixelBoardSize = localStorage.getItem('boardSize');
        const pixelBoardSize2 = pixelBoardSize * pixelBoardSize;
        localStorage.removeItem('pixelBoard');
        pixelBoard.style.width = `${pixelBoardSize2}px`;
        pixelBoard.style.height = `${pixelBoardSize2}px`;
        if(boardSize.value === '') {
            alert('Board inválido!');
        }
        for (const n in new Array(pixelBoardSize2).fill('0')) {
            const getContainer = document.querySelector('.container');
            getContainer.innerHTML += '<div class="pixel"></div>';
        }
        const getBox = document.querySelectorAll('.pixel');
        for (let index = 0; index < getBox.length; index += 1) {
            getBox[index].style.width = '40px';
            getBox[index].style.height = '40px';
            getBox[index].style.backgroundColor = 'white';
            getBox[index].style.border = '1px solid black';
        };
        const pixelsBoard = document.querySelector('#pixel-board');
        pixelsBoard.style.display = "grid";
        pixelsBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 40px)`;
    })

    const pixelBoardSize = localStorage.getItem('boardSize');
    if (pixelBoardSize >= 5 && pixelBoardSize <= 50) {
        const arrayPixels = document.getElementById('pixel-board');
        while (arrayPixels.firstChild) {
            arrayPixels.removeChild(arrayPixels.firstChild);
        }
    }
    const pixelBoardSize2 = pixelBoardSize * pixelBoardSize;
    console.log(pixelBoardSize2)
    for (const n in new Array(pixelBoardSize2).fill('0')) {
        console.log(n)
        const getContainer2 = document.getElementById('pixel-board');
        getContainer2.innerHTML += '<div class="pixel"></div>';
        getContainer2.style.width = '40px';
        getContainer2.style.height = '40px';
    }
    const getBox2 = document.querySelectorAll('.pixel');
    for (let index = 0; index < getBox2.length; index += 1) {
        getBox2[index].style.width = '40px';
        getBox2[index].style.height = '40px';
        getBox2[index].style.backgroundColor = 'white';
        getBox2[index].style.border = '1px solid black';
    };

    loadBoard();
};