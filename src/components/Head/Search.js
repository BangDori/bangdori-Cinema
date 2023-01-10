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
        // console.log("Search rendering");

        return(
            <div className="search-form">
                <form
                    name="search"
                    action="/search-process"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        alert('서비스를 준비중입니다.')
                    }}
                >
                    <img id="decoSearch" src="/images/decoSearch.png" alt="SearchFrom decoration"/>
                    <input id="query" type="text" name="query" placeholder="영화 제목을 입력해주세요" 
                        onChange={function(e){
                            if(e.target.value === '') {
                                this.props.onChangeQuery('off');
                            } else {
                                this.props.onChangeQuery('on');
                            }
                        }.bind(this)}
                    />
                    <button type="submit" className="search-button">
                        <img id="searchIcon" src="/images/searchIcon.png" alt="Search Icon" />
                    </button>
                    
                    {this.checkSearch()}
                </form>
            </div>
        )
    }
}