let matrix = [];
let heightMatrix = 20;
let wightMatrix = 20;
let animalPositionY = 10;
let animalPositionX = 11;

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

matrix[Symbol.iterator] = function () {
    let quantityTree = 100;
    let numberOfCol = 0;
    return {
        next() {
            if (numberOfCol < heightMatrix) {
                matrix.push([]);
                for (let numberOfRow = 0; numberOfRow < wightMatrix; numberOfRow++) {
                    let lot = randomInteger(0, 3);
                    if (quantityTree != 0 && lot == 2) {
                        matrix[numberOfCol][numberOfRow] = `<span class="tree"></span>`;
                        quantityTree--;
                    } else {
                        matrix[numberOfCol][numberOfRow] = `<span></span>`;
                    }
                }
                return {
                    done: false,
                    value: numberOfCol++
                }
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

for (let i of matrix) {}

function strokeCheck(y) {
    let step = randomInteger(-1, 1);
    y = y + step;
    if (y < 0) {
        y = -y;
        return y;
    }
    else if (y > heightMatrix) {
        y--;
        return y;
    }
    else {
        return y;
    }
}

let motionAnimal = function defineNextCoors() {
    var tempX = strokeCheck(animalPositionX);
    var tempY = strokeCheck(animalPositionY);
    if (matrix[tempY][tempX] == `<span></span>`) {
        animalPositionX = tempX;
        animalPositionY = tempY;
        return matrix[animalPositionY][animalPositionX];
    } else {
        return defineNextCoors();
    }
};

function printMatrix() {
    matrix[animalPositionY][animalPositionX] = `<span  class="animal"}></span>`;
    let output = ``;
    for (let y = 0; y < heightMatrix; y++) {
        output += `<div>`;
        for (let x = 0; x < wightMatrix; x++) {
            output += matrix[y][x];
        }
        output += `</div>`;
    }
    document.body.innerHTML = output;
    matrix[animalPositionY][animalPositionX] = `<span></span>`;
}

function printByWindow() {
    motionAnimal();
    printMatrix();
}

setInterval(printByWindow, 300);