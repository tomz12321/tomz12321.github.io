import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header';
import Search from './search';
import './App.css';

const EmptyComponent = () => (<div></div>);
const NotFoundComponent = () => (<div>Page Not Found.</div>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={EmptyComponent}/>
          <Route path='/search' component={Search}/>
          <Route component={NotFoundComponent}/>
        </Switch>
      </div>
    );
  }
}

export default App;
