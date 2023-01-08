import React, { Component } from 'react';

export default class Search extends Component {
    shouldComponentUpdate(newProps) {
        if(this.props.search === newProps.search) {
            return false;
        }

        return true;
    }

    checkSearch() {
        let _image = null;

        if(this.props.search === 'on') {
            _image = 
                <img
                id="cancel"
                src="/images/cancel.png"
                alt="delete query"
                onClick={function(e){
                    let query = document.getElementById("query");
                    query.value = '';
                    this.props.onChangeQuery('off');
                }.bind(this)}
            />
        }

        return _image;
    }

    render() {
        console.log("Search rendering");

        return(
            <div className="search-form">
                <form
                    action="/search-process"
                    method="post"
                    onSubmit={function(e){
                        alert('서비스를 준비중입니다.')
                        e.preventDefault();
                    }}
                >
                    <img id="decoSearch" src="/images/decoSearch.png" alt="SearchFrom decoration"/>
                    <input id="query" type="text" name="query" placeholder="영화 제목을 입력해주세요" 
                        onChange={function(e){
                            this.props.onChangeQuery('on');
                        }.bind(this)}
                    />
                    
                    {this.checkSearch()}
                </form>
            </div>
        )
    }
}