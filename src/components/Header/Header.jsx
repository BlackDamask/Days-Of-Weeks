import './Header.css'
import Form from 'react-bootstrap/Form';
import Arrow from '../../assets/selects_arrow.png';

export default function Header({setContentType}){
    return(

        <div id='header'>
            <h1>
                <b>Days Of Weeks</b>
            </h1>
            <div id='selects'>
                <Form.Select onChange={e => setContentType(e.target.value)}>
                    <option value={'weekLife'}>Weeks</option>
                    <option value={'monthLife'}>Months</option>
                    <option value={'yearLife'}>Years</option>
                </Form.Select>
                <img src = {Arrow}></img>
                <Form.Select>
                    <option>Life</option>
                </Form.Select>
            </div>
            
        </div>
    );
}