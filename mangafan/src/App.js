import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BrandSignin from './components/Brand-Nav';
import AppNavbar from './components/Nav';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <>
        <BrandSignin />
        <AppNavbar />
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            {/* <Route path='/mangas/:id' exact={true} component={BookEdit}/> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;