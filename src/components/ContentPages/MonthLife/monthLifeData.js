const squaresWithColors = [];
let squares = [];

export function fillToSquare(row,col,color){
    for(let i = 0; i <= row-1; i ++){
        for (let j=0; j < 12; j++){
            squares[i][j] = color;
        }
    }

    for(let j = 0; j<=col;j++){
        squares[row][j] = color;
    }
    return squares;
}

export function getSquares() {
    for (let i = 0; i < 50; i++) {
        squares[i] = []; 
        for (let j = 0; j < 12; j++) {
            squares[i][j] = '#575757';
        }
    }
    return squares;
}