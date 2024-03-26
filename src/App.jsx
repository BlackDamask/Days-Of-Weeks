import './App.css'
import Header from './components/Header/Header.jsx';
import WeekYearContentPage from './components/ContentPages/WeekYear/WeekYearContentPage.jsx';
import MonthYearContentPage from './components/ContentPages/MonthYear/MonthYearContentPage.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
      <Container fluid>
      
        <Row>
          <Col  md = {{ span: 8, offset: 2 }}>
              <Header></Header>
            </Col>
        </Row>
        <Row>
          <Col md = {{ span: 8, offset: 2 }}>
            <MonthYearContentPage></MonthYearContentPage>
          </Col>
        </Row>
      </Container>
  )
}

export default App
