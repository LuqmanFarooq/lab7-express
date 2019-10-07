import React from 'react';
import './App.css';
import Content from './components/content';
import {Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';

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
<Route exact path='/' component={Content}  />
<Route exact path='/create' component={Create} />
<Route path='/read' component={Read} />
</Switch>
</div>
</Router>
  );
}
export default App;
