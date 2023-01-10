import React, { Component } from 'react';

export default class Content extends Component {
    shouldComponentUpdate(newProps) {
        if(this.props.section === newProps.section) {
            return false;
        }

        return true;
    }
    
    getCountry() {
        if(this.props.section === 1) {
            return "/images/korea/";
        } else {
            return "/images/foreign/"
        }
    }

    loadPoster(_content) {
        let _lists = [];
        let content = _content;
        let i = 0;

        while(i < content.length) {
            _lists.push(
                    <div className="poster">
                        <img src={this.getCountry() + content[i] + ".jpg"} alt={content[i]} />
                    </div>
            )

            i += 1;
        }

        return _lists;
    }

    loadTitle(_content) {
        let _lists = [];
        let content = _content;
        let i = 0;

        while(i < content.length) {
            _lists.push(
                <button className="movie-title">{content[i]}</button>
            )

            i += 1;
        }

        return _lists;
    }

    loadTopic() {
        let _lists = [];
        let topic = this.props.topic;
        let content = this.props.content;
        let i = 0;

        while(i < topic.length) {
            _lists.push(
                <div key={i} className="topic">
                    {/* <div className="topic-name">
                        {this.props.topic[i]}
                    </div> */}
                    <div className="topic-content">
                        <div className="movie">
                           {this.loadPoster(content[i])}
                        </div>
                        <div key={i} className="movie-info">
                            {this.loadTitle(content[i])}
                        </div>
                    </div>
                </div>
            )

            i += 1;
        }

        return _lists;
    }

    render() {
        return(
            <section className="vending-machine">
                <div className="exhibition-poster">
                    {this.loadTopic()}
                    <div className="push-box">
                        Push
                    </div>
                </div>
                <div className="interaction-box">
                    dd
                </div>
            </section>
        )
    }
}