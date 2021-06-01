import { Container, Row } from 'react-bootstrap';
import './App.css';
import HomePage from './view/HomePage';

function App() {

  return (
    <div  className="App">
      <Row>
        <HomePage></HomePage>
      </Row>
    </div>
  );
}

export default App;
