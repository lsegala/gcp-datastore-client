import React, { PureComponent } from 'react';
import VisibleCasesList from './containers/VisibleCasesList';
import MainMenu from './containers/MainMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { connect } from 'react-redux';
import { Growl } from 'primereact/growl';
import Case from './containers/Case';
import Login from './containers/Login';

class App extends PureComponent {
  constructor(props){
    super();
    let isAuthenticated = false;
    if (localStorage.getItem('token_app')) {
      isAuthenticated = true;
    }
    this.state = {
      authenticated: isAuthenticated
    };
  }

  static getDerivedStateFromProps(props, state){
    if(state.growl && props.messages && props.messages.messages && props.messages.messages.length > 0){
      state.growl.show(props.messages.messages);
    }
    return null;
  }

  render(){
    return (
      <Router>
        <div className="App">
          <MainMenu authenticated={this.state.authenticated}/>
          <Growl ref={(el) => this.setState({growl: el})}/>
          <div className="p-grid">
            <div className="p-col-12">
              <Switch>
                <Route path="/cases/list">
                  <VisibleCasesList/>
                </Route>
                <Route path="/cases/new">
                  <Case/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/">
                  <h2>Bem vindo!</h2>
                  {!this.state.authenticated && (
                    <h3>Realize o seu Login!</h3>
                  )}
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages
});

export default connect(mapStateToProps)(App);
