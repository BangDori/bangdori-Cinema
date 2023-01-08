import React, { Component } from 'react';
import Logo from './Head/Logo';
import Search from './Head/Search';
import Menu from './Head/Menu.js';
import '../Head.css';

export default class Head extends Component {
    shouldComponentUpdate(newProps, newState) {
        if(this.props.state === newState) {
            return false;
        }

        return true;
    }

    render() {
        console.log("Head Rendering");
        return(
            <header>
                <Logo></Logo>

                <Search
                    search={this.props.search}
                    onChangeQuery={function(_search){
                        this.props.onChangeQuery(_search);
                    }.bind(this)}
                ></Search>

                <Menu
                    modal={this.props.modal}
                    onModal={function(_modal){
                        this.props.onModal(_modal);
                    }.bind(this)}                    
                ></Menu>
            </header>
        )
    }
}