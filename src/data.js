export function getSquares() {
    let squares = [];
    for (let i = 0; i < 90; i++) {
        squares[i] = []; // Initialize inner array
        for (let j = 0; j < 52; j++) {
            squares[i][j] = '#39a7ff';
        }
    }
    return squares;
}

