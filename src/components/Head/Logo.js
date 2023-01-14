import React, { Component } from 'react';

export default class Logo extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            
            <div className="logo">
                <a href="/">
                    <img src="/images/logo.png" alt="Bangdori Cinema logo" />
                    뱅도리 시네마
                </a>
            </div>
        )
    }
}