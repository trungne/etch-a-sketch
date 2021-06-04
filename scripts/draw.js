const colorList = ["yellow", "green", "blue", "teal", "black", "white", "purple", "red", "orange"];
let currentColor = colorList[getRandomInt(colorList.length)];


const container = document.getElementById("container");
container.addEventListener("mousemove", e => draw(e));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function draw(mouseMove){
    if (mouseMove.target.style.backgroundColor) return;
    mouseMove.target.style.backgroundColor = currentColor;
    let temp = currentColor;
    
    // change current color
    while (temp === currentColor){
        currentColor = colorList[getRandomInt(colorList.length)];
    }
}


