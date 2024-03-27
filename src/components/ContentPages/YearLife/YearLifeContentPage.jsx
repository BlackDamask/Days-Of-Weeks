import Square from '../../square/Square.jsx';
import '../ContentPage.css';
import HintArrow from '../../../assets/hint_arrow.png'
import {getSquares, fillToSquare} from './yearLifeData.js';
import { setSquareColor} from '../contentPagefunctions.jsx'

export default function YearLifeContentPage(){
    const liStyle = {
        margin: '0 0 22px 0',
        height: '45px'
    }

    function ShowHintYear(rowIndex){
        let answer = <p>{(rowIndex)*10}</p>; 
        return answer;
    }

    let squares = getSquares();

    squares = fillToSquare(1,6,'#38a9ff');

    return(
        <div id = 'content-page'>
            
            <ol id = 'all-squares'>
                <li id='hint' key = {'hint'}>
                    <h2>
                        Years of the life
                    </h2>
                    <img src={HintArrow} alt="hint arrow" />
                </li>
                {squares.map((row, rowIndex) =>(
                <li key = {rowIndex} style={liStyle}>
                    <ol className='row-squares' style = {{gap: '22px'}}>
                        <li key={'hintYear'+rowIndex} style={liStyle}>
                            {ShowHintYear(rowIndex)}
                        </li>
                        {row.map((color, colIndex) => (
                            <li key={colIndex} style={liStyle}>
                                <Square backColor = {color} width={'45px'} height={'45px'}></Square>
                            </li>
                        ))}
                    </ol>
                </li>
                ))}
            </ol>
        </div>
    );
}