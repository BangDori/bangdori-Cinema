import React, { Component } from 'react';

export default class Content extends Component {

    getCountry() {
        if(this.props.section === 1) {
            return "/images/korea/";
        } else {
            return "/images/foreign/"
        }
    }

    loadContent(_content) {
        let _lists = [];
        let content = _content;
        let i = 0;

        while(i < content.length) {
            _lists.push(
                <div className="movie">
                    <div className="poster">
                        <img src={this.getCountry() + content[i] + ".jpg"} alt={content[i]} />
                    </div>
                    <div className="movie-info">
                        <div className="movie-title">{content[i]}</div>
                        <div className="movie-reservation">
                            <button>예매하기</button>
                        </div>
                    </div>
                </div>
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
                    <div className="topic-name">
                        {this.props.topic[i]}
                    </div>
                    <div className="topic-content">
                        {this.loadContent(content[i])}
                    </div>
                </div>
            )

            i += 1;
        }

        return _lists;
    }

    render() {
        return(
            <section>
                {this.loadTopic()}
            </section>
        )
    }
}