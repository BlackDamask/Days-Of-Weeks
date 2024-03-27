import './App.css'
import Header from './components/Header/Header.jsx';
import WeekLifeContentPage from './components/ContentPages/WeekLife/WeekLifeContentPage.jsx';
import MonthLifeContentPage from './components/ContentPages/MonthLife/MonthLifeContentPage.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';
import YearLifeContentPage from './components/ContentPages/YearLife/YearLifeContentPage.jsx';

function App() {

  const [contentType, setContentType] = useState('weekLife');

  const ChoseContentPage = () =>{
    let content;
    switch (contentType){
      case 'monthLife':
        content = (<MonthLifeContentPage></MonthLifeContentPage>);
        break;
      case 'weekLife':
        content = (<WeekLifeContentPage></WeekLifeContentPage>);
        break;
      case 'yearLife':
        content = (<YearLifeContentPage></YearLifeContentPage>)
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
