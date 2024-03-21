import './Header.css'
import Form from 'react-bootstrap/Form';
import Arrow from '../../assets/selects_arrow.png';

export default function Header(){
    return(
        <div id='header'>
            <h1>
                <b>Days Of Weeks</b>
            </h1>
            <div id='selects'>
                <Form.Select>
                    <option>Weeks</option>
                </Form.Select>
                <img src = {Arrow}></img>
                <Form.Select>
                    <option>Year</option>
                </Form.Select>
            </div>
            
        </div>
    );
}