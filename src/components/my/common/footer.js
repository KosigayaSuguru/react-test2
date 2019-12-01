import React from 'react';
import { connect } from 'react-redux';


class Footer extends React.Component {
    constructor(props){
        super(props);
        console.log('Footer#constructor()');
    }
    render() {
        console.log('Footer#render()');
        
        let footer;
        if (this.props.auth_status) {
            footer = <footer style={{ textAlign: 'center', backgroundColor: 'darkblue', color: 'floralwhite' }}> footer area </footer>;
        } else {
            footer = <footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'floralwhite' }}> footer area with not login</footer>;
        }

        return footer;
    }
}

const mapStateToProps = state => {
    return { auth_status: state.auth };
};

export default connect(mapStateToProps)(Footer);