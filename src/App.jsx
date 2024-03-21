import './App.css'
import Header from './components/Header/Header.jsx';
import ContentPage from './components/ContentPage/ContentPage.jsx';
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
            <ContentPage></ContentPage>
          </Col>
        </Row>
      </Container>
  )
}

export default App
