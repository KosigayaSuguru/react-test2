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
        if (this.props.auth_status === true) {
            return (<Route path={this.props.path} component={this.props.children.type}></Route>)
        } else {
            return (<Route path={this.props.path}><Redirect to={'/login'} /></Route>)
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