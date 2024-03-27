import Square from '../../square/Square.jsx';
import '../ContentPage.css';
import HintArrow from '../../../assets/hint_arrow.png'
import {getSquares, fillToSquare} from './weekLifeData.js';
import {ShowHintYear, setSquareColor} from '../contentPagefunctions.jsx'

export default function WeekLifeContentPage(){
    const liStyle = {
        margin: '2px 0',
        height: '16px'
    }


    let squares = getSquares();

    squares = fillToSquare(16,40,'#38a9ff');

    
    
    return(
        <div id = 'content-page'>
            
            <ol id = 'all-squares'>
                <li id='hint' key = {'hint'} >
                    <h2>
                        Weeks of year
                    </h2>
                    <img src={HintArrow} alt="hint arrow" />
                </li>
                {squares.map((row, rowIndex) =>(
                <li key = {rowIndex} style = {liStyle}>
                    <ol className='row-squares' style = {{gap: '2px'}}>
                        <li key={'hintYear'+rowIndex} style = {liStyle}>
                            {ShowHintYear(rowIndex)}
                        </li>
                        {row.map((color, colIndex) => (
                            <li key={colIndex} style = {liStyle}>
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