import React, { Component } from 'react';

export default class Menu extends Component {
    shouldComponentUpdate(newProps) {
        if(this.props.menu === newProps.menu) {
            return false;
        }

        return true;
    }

    render() {
        // console.log("Menu rendering");
        
        return(
            <div className="menu">
                <img id="decoMenu" src="/images/tree.png" alt="Menu decoration"></img>
                <img id="menu" src="/images/menu.png" alt="Menu"
                    onClick={function(e){
                        if(this.props.menu === 'on') {
                            this.props.onMenu('off');
                        } else {
                            this.props.onMenu('on');
                        }
                    }.bind(this)}
                />
            </div>
        )
    }
}