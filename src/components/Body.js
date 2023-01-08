import React, { Component } from 'react';

export default class Body extends Component {
    shouldComponentUpdate() {
        return true;
    }
    
    render() {
        return(
            <article>
                Body
            </article>
        )
    }
}