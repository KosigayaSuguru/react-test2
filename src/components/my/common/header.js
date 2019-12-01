import React from 'react';
import { connect } from 'react-redux';


class Header extends React.Component {
    constructor(props){
        super(props);
        console.log('Header#constructor()');
    }
    render() {
        console.log('Header#render()');
        let header;
        if(this.props.auth_status){
            header = <header style={{ textAlign: 'center', backgroundColor: 'darkorange', color: 'floralwhite' }}>header area</header>;
        } else {
            header = <header style={{ textAlign: 'center', backgroundColor: 'black', color: 'floralwhite' }}>header area with not login</header>;
        }

        return header;
    }
}

const mapStateToProps = state => {
    return { auth_status: state.auth };
};

export default connect(mapStateToProps)(Header);