import Square from '../../square/Square.jsx';
import '../ContentPage.css';
import HintArrow from '../../../assets/hint_arrow.png'
import {getSquares, setSquareColor, fillToSquare} from './weekYearData.js';

export default function WeekYearContentPage(){
    let squares = getSquares();
    console.log(squares);
    squares = fillToSquare(16,40,'#38a9ff');
    console.log(squares);
    const ShowHintYear = (rowIndex) =>{
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

    return(
        <div id = 'content-page'>
            
            <ol id = 'all-squares'>
                <li id='hint' key = {'hint'}>
                    <h2>
                        Weeks of year
                    </h2>
                    <img src={HintArrow} alt="hint arrow" />
                </li>
                {squares.map((row, rowIndex) =>(
                <li key = {rowIndex}>
                    <ol className='row-squares'>
                        <li key={'hintYear'+rowIndex}>
                            {ShowHintYear(rowIndex)}
                        </li>
                        {row.map((color, colIndex) => (
                            <li key={colIndex}>
                                <Square backColor = {color} width={'16px'} height={'16px'}></Square>
                            </li>
                        ))}
                    </ol>
                </li>
                ))}
            </ol>
        </div>
    );
}