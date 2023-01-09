import React, { Component } from 'react';
import Navigation from './Body/Navigation';
import Content from './Body/Content';
import '../navigation.css';
import '../content.css';

export default class Body extends Component {
    shouldComponentUpdate(newProps) {
        if(this.props.section === newProps.section) {
            return false;
        }

        return true;
    }
    
    render() {
        console.log("Body render");

        return(
            <article>
                <Navigation
                    section={this.props.section}
                    button={this.props.button}
                    onChangeSection={function(_section){
                        this.props.onChangeSection(_section);
                    }.bind(this)}
                ></Navigation>

                <Content
                    topic={this.props.topic}
                    content={this.props.content}
                ></Content>
            </article>
        )
    }
}