import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
        console.log("PrivateRoute#constructor@props")
        console.log(props)
    }

    render() {
        let Component = this.props.children.type
        let path = this.props.path

        if (this.props.auth_status === true) {
            return (<Route path={path}><Component /></Route>)
        } else {
            return (<Route path={path}><Redirect to={{ pathname: '/login', search: "?redirect=" + path }} /></Route>)
        }
    }
}

const mapStateToProps = state => {
    return { auth_status: state.auth };
}

const mapDispatchToProps = dispatch => {
    return {
        auth: () => dispatch({ type: 'AUTH' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)