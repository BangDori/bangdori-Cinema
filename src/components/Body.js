import React, { Component } from 'react';
import Navigation from './Body/Navigation';
import Content from './Body/Content';
import '../assets/navigation.css';
import '../assets/content.css';

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
                    section={this.props.section}
                    topic={this.props.topic}
                    content={this.props.content}
                ></Content>
            </article>
        )
    }
}