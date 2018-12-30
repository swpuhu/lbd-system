import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import CollapseMenu from './component/Collapse/CollapseMenu';
import Header from './component/Header/Header';
import GetArticle from './page/GetArticle';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="route-window">
          <Header title="管理系统"/>
            <CollapseMenu/>
            <div className="route-items">
              <Switch>
                <Route exact path="/" component={Welcome}></Route>
                <Route exact path="/getArticle" component={GetArticle}></Route>
                <Route path="/test" component={Test}></Route>
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

function Welcome() {
  return <h1>Welcome!</h1>
}
function Home() {
  return <h1>Home</h1>;
}

function Test() {
  return <h1>Test</h1>
}
export default App;
