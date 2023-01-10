import React, { Component } from 'react';

export default class Navigation extends Component {
    shouldComponentUpdate(newProps){
        if(this.props.section === newProps.section) {
            return false;
        }

        return true;
    }

    selectedButton(i) {
        if(i === this.props.section) {
            return 'selected-button';
        }

        return '';
    }

    loadButtons() {
        let _buttons = [];
        let _button = this.props.button;
        let i = 0;
        
        while(i < _button.length) {
            _buttons.push(
                <li key={_button[i].id}>
                    <button
                        className={this.selectedButton(i+1)}
                        id={_button[i].id}
                        onClick={function(e){
                            this.props.onChangeSection(e.target.id);
                        }.bind(this)}
                    >
                        {_button[i].name}
                    </button>
                </li>
            )

            i += 1;
        }

        return _buttons;
    }

    render() {
        // console.log("Navigation render");

        return(
            <nav className="button-navigation">
                <div className="space"></div>
                <div id="quotes">
                    Life is like a moive.
                </div>
                <div className="button-space">
                    <img id="decoNav" src="/images/snowman.png" alt="snowman" />
                    <ul className="button-list">
                        {this.loadButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}