const squaresWithColors = [];
let squares = [];
export function setSquareColor(row,col,color){
    squares[row][col] = color;
    return squares;
}

export function getSquares() {
    for (let i = 0; i < 90; i++) {
        squares[i] = []; // Initialize inner array
        for (let j = 0; j < 52; j++) {
            squares[i][j] = '#ffffff';
        }
    }
    return squares;
}

