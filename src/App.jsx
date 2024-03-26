import './App.css'
import Header from './components/Header/Header.jsx';
import WeekYearContentPage from './components/ContentPages/WeekYear/WeekYearContentPage.jsx';
import MonthYearContentPage from './components/ContentPages/MonthYear/MonthYearContentPage.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';

function App() {

  const [contentType, setContentType] = useState('monthYear');

  const ChoseContentPage = () =>{
    let content;
    switch (contentType){
      case 'monthYear':
        content = (<MonthYearContentPage></MonthYearContentPage>);
        break;
      case 'weekYear':
        content = (<WeekYearContentPage></WeekYearContentPage>);
        break;
    }
    return content;
  }

  return (
      <Container fluid>
        <Row>
          <Col  md = {{ span: 8, offset: 2 }}>
              <Header setContentType = {setContentType}></Header>
            </Col>
        </Row>
        <Row>
          <Col md = {{ span: 8, offset: 2 }}>
            {ChoseContentPage()}
          </Col>
        </Row>
      </Container>
  )
}

export default App
