import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hoge from "./components/Hoge";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function Route1({match}) {
    console.log(match);
    return (
        <div>route1</div>
    )
}

function Root() {
    return (
        <div>root</div>
    )
}

function App() {
    var data = [1, 2, 3];
    var list = [];

    for (var i in data) {
        list.push(<Hoge key={i} a="gggg"/>);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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

                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li><Link to="/">root_link</Link></li>
                                <li><Link to="/route1/1">route1_link</Link></li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/route1/:id1" component={Route1}/>
                            <Route path="/"> <Root/> </Route>
                        </Switch>
                    </div>
                </Router>

            </header>
        </div>
    );
}


export default App;
