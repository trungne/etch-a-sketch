let GRID_WIDTH = 700; // 300px

function displayGrid(){
    const container = document.getElementById("container");

    // remove all previous displayed mini grids
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    
    // set new dimension for grid container
    const columnNum = Number(document.getElementById("dimension").value);

    // check valid number between 0 and 100;
    if (isNaN(columnNum) || columnNum < 0 || columnNum > 100){
        alert("Please enter a number between 0 and 100");
        return;
    }

    let columnSize = String(`${GRID_WIDTH/columnNum}px `);
    let gridTemplateColumns = columnSize.repeat(columnNum);
    container.style.gridTemplateColumns = gridTemplateColumns;

    // create a square the size of columnNum x columnNum
    for (let i = 0; i < columnNum * columnNum; i++){
        let grid = document.createElement("div");
        grid.classList.add("grid-item");

        // minigrid should be a square!
        grid.style.width = columnSize;
        grid.style.height = columnSize;

        container.appendChild(grid);
    }
    return false;
}