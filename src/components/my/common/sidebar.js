import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {

        let list = ['side menu1', 'side menu2', 'side menu3', 'side menu4'];
        let component;
        if (this.props.auth_status) {
            component = <div style={{ width: '40%', padding: '10px', backgroundColor: 'cornflowerblue' }}>
                side
                <ul>
                    {list.map((val, idx) => <li key={'component' + (idx + 1)} style={{ textAlign: 'left' }}><Link to={'/my/component' + (idx + 1)}>{val}</Link></li>)}
                </ul>
            </div>;
        } else {
            component = null;
        }
        return component;
    }
}

const mapStateToProps = state => { return { auth_status: state.auth }; };

export default connect(mapStateToProps)(Sidebar);