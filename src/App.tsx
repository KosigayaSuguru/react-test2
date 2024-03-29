import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hoge from "./components/Hoge";
import Login from "./containers/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute"
import Loggedin from './components/Loggedin';

import Main from './components/my/common/layout'

function Route1({ match }: { match: any, hoge: any }) {
    console.log("#Route1()")
    console.log(match);
    return (
        <div>route1</div>
    )
}

function Root() {
    console.log("#Root()")
    return (
        <div>root</div>
    )
}

function App() {
    var data = [1, 2, 3];
    var list = [];

    for (var i in data) {
        list.push(<Hoge key={i} a="gggg" />);
    }

    console.log("#App()")
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                </p>
                    {list}
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                </a>

                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/loggedin">loggedin (plz login)</Link></li>
                                <li><Link to="/">root_link</Link></li>
                                <li><Link to="/route1/1">route1_link</Link></li>
                                <li><Link to="/login">login_link</Link></li>
                            </ul>
                        </nav>

                        <PrivateRoute path="/loggedin"><Loggedin /></PrivateRoute>
                        <Route exact path="/" component={Root}></Route>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/route1/:id1" component={Route1} />

                        <Switch>
                        </Switch>
                    </div>
                </header>
                <Main />
            </div>
        </Router>
    );
}


export default App;
