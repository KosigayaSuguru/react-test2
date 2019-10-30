import React from 'react';

export default class Loggedin extends React.Component {

    render() {
        console.log(this.props)
        console.log("Loggedin#render")
        return (
            <div>Loggedin</div>
        )
    }
}