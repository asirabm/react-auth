import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './login';
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import FreeComponent from './FreeComponent'
import AuthComponent from './AuthComponent'
import Account from './Account';

function App() {
  return (
   <>
    <Container>
    <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>


   <Routes>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/auth" component={AuthComponent} />
      </Routes>
       
      
    </Container>

 
   </>
  );
}

export default App;
