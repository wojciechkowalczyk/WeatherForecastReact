import React from 'react';
import './App.css';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onClick(event);
    }

    render() {
        let class_name = this.props.open ? 'drawer_open' : 'drawer_closed';
        return (
                <div onClick={this.handleClick} className={"drawer " + class_name}>
                    <div className="drawer_title">{this.props.title}</div>
                    <div>{this.props.children}</div>
                </div>
                );
    }
}
