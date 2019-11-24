import React from "react"

import Sidebar from "./sidebar"
import Header from "./header"
import Footer from "./footer"
import Contents1 from "../contents1"
import Default from "../default"

import {
    BrowserRouter as Route, Switch, withRouter
} from "react-router-dom";

import PrivateRoute from "../../../routes/PrivateRoute"

class Main extends React.Component {

    render() {

        return (
            <div style={{ width: "1200px", margin: "0 auto" }}>
                <Header />
                <div style={{ display: "flex" }}>
                    <Sidebar />
                    <Switch>
                        <Route exact path="/login" component={Contents1}></Route>
                        <PrivateRoute exact path="/my/component1"><Contents1 /></PrivateRoute>
                        <Route path="/" component={Default}></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Main)