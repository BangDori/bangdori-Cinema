import React, { Component } from 'react';
import Navigation from './Body/Navigation';
import Content from './Body/Content';
import '../assets/navigation.css';
import '../assets/content.css';

export default class Body extends Component {
    render() {
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
                    ticketing={this.props.ticketing}
                    section={this.props.section}
                    topic={this.props.topic}
                    content={this.props.content}
                    onChangeTicketing={function(_ticketing){
                        this.props.onChangeTicketing(_ticketing);
                    }.bind(this)}
                    ticketingMovie={function(_title){
                        this.props.ticketingMovie(_title);
                    }.bind(this)}
                ></Content>
            </article>
        )
    }
}