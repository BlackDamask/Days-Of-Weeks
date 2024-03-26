export function setSquareColor(row,col,color){
    squares[row][col] = color;
    return squares;
}

export function ShowHintYear(rowIndex){
    const year = rowIndex +1;
    let answer = <p></p>; 
    if(year % 5 == 0 && year != 5){
        answer = <p>{year}</p>;
    }
    else if (year == 5){
        answer = <p>5</p>;
    }
    return answer;
}
