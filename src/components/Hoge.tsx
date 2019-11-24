import React from 'react';
import '../App.css';

interface HogeProps {
    a: string;
}

class Hoge extends React.Component<HogeProps> {

    render() {
        return (
            <div>
                aaauauaauuu{this.props.a}
            </div>
        );
    }
}

export default Hoge;
