import React from 'react';
import './App.css';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="drawer">
                    <div className="drawer_title"></div>
                    <div>
                        <pre>{this.props.data}</pre>
                    </div>
                </div>
                );
    }
}
