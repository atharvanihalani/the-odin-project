const main = document.getElementById('main');
let grid;
mouseDown = false;

setupGrid();
setupListeners();

function setupGrid(size = 16) {
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    grid.addEventListener('mousedown', () => mouseDown = true);

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', function() {
                onMouseOver(this);
            });
            box.addEventListener('mousedown', function() {
                box.style.backgroundColor = 'black';
            });
            row.appendChild(box);
        }
        grid.appendChild(row);
    }

    main.appendChild(grid);
}

function setupListeners() {
    let body = document.querySelector('body');
    body.addEventListener('mouseup', () => mouseDown = false);

    let resize = document.getElementById('resize');
    resize.addEventListener('click', () => resizeGrid())
}

function resizeGrid() {
    size = prompt("Enter a size – 1-64");
    grid.remove();
    setupGrid(size);
}

function onMouseOver(box) {
    if (mouseDown) {
        box.style.backgroundColor = 'black';
    }
}


