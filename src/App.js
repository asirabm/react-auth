import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './login';
import { Container, Col, Row } from "react-bootstrap";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
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
            <Link to="/">Home</Link>
            <Link to="/free">Free Component</Link>
            <Link to="/auth">Auth Component</Link>
          </section>
        </Col>
      </Row>

    
   <Routes>
        <Route index element={<Account/>} />
        <Route path="/free" element={<FreeComponent/>} />
        <Route path="/auth" element={<AuthComponent/>} />
      </Routes>
     
      
    </Container>

 
   </>
  );
}

export default App;
