import Square from '../../square/Square.jsx';
import '../ContentPage.css';
import HintArrow from '../../../assets/hint_arrow.png'
import {getSquares, fillToSquare} from './monthYearData.js';
import {ShowHintYear, setSquareColor} from '../contentPagefunctions.jsx'

export default function MonthYearContentPage(){
    const liStyle = {
        margin: '0 0 18px 0',
        height: '40px'
    }


    let squares = getSquares();

    squares = fillToSquare(16,4,'#38a9ff');

    return(
        <div id = 'content-page'>
            
            <ol id = 'all-squares'>
                <li id='hint' key = {'hint'}>
                    <h2>
                        Months of year
                    </h2>
                    <img src={HintArrow} alt="hint arrow" />
                </li>
                {squares.map((row, rowIndex) =>(
                <li key = {rowIndex} style={liStyle}>
                    <ol className='row-squares' style = {{gap: '18px'}}>
                        <li key={'hintYear'+rowIndex} style={liStyle}>
                            {ShowHintYear(rowIndex)}
                        </li>
                        {row.map((color, colIndex) => (
                            <li key={colIndex} style={liStyle}>
                                <Square backColor = {color} width={'40px'} height={'40px'}></Square>
                            </li>
                        ))}
                    </ol>
                </li>
                ))}
            </ol>
        </div>
    );
}