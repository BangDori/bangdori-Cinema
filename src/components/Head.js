import React, { Component } from 'react';
import Logo from './Head/Logo';
import Search from './Head/Search';
import Menu from './Head/Menu.js';
import '../assets/Head.css';

export default class Head extends Component {
    shouldComponentUpdate(newProps, newState) {
        if((this.props.search === newProps.search)
            && (this.props.menu === newProps.menu)) {
            return false;
        }

        return true;
    }

    render() {
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
                    menu={this.props.menu}
                    onMenu={function(_menu){
                        this.props.onMenu(_menu);
                    }.bind(this)}                    
                ></Menu>
            </header>
        )
    }
}