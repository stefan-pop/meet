import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return (
            <div className="Alert">
                <small style={this.getStyle()}>{this.props.text}</small>
            </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'white'
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: 'orangered',
            width: '100%',
            display: 'block',
            margin: '0',
            lineHeight: '2rem'
        };
    }

}

export {InfoAlert, ErrorAlert, WarningAlert};

Alert.propTypes = {
    text: PropTypes.string.isRequired
}