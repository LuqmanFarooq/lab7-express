import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import {Button} from 'react-bootstrap';
import {Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

function App() {
  return (
    <Router>
<div className="App">
<Navbar bg="primary" variant="dark">
<Nav className="mr-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/read">Read</Nav.Link>
<Nav.Link href="/create">Create</Nav.Link>
</Nav>
</Navbar>
<br />
<Switch>
<Route path='/' component={Content} exact />
<Route exact path='/create' component={Footer} />
<Route path='/read' component={Header} />
</Switch>
</div>
</Router>
  );
}
export default App;
