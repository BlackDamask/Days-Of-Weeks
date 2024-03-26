import './Square.css';

export default function Square({backColor, width, height}){
    console.log();
    return(
        <button className="square" style={{backgroundColor: backColor, width: width, height: height}}>

        </button>
    );
}