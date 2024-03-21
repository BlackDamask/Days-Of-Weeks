import Square from './square/Square.jsx';
import './ContentPage.css';
import { getSquares } from '../../data.js';

export default function ContentPage(){
    const squares = getSquares();
    return(
        <div id = 'content-page'>
            <ol id = 'all-squares'>
                {squares.map((row, rowIndex) =>(
                <li key = {rowIndex}>
                    <ol className='row-squares'>
                        {row.map((color, colIndex) => (
                            <li key={colIndex}>
                                <Square backgroundColor = {color}></Square>
                            </li>
                        ))}
                    </ol>
                </li>
                ))}
            </ol>
        </div>
    );
}