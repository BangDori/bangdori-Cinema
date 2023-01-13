import React, { Component } from 'react';

export default class Content extends Component {    
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
                    <div key={i} className="poster">
                        <img src={this.getCountry() + content[i] + ".jpg"} alt={content[i]} />
                    </div>
            )

            i += 1;
        }

        return _lists;
    }

    onCheckTicket() {
        if(this.props.ticketing === 'on') {
            return '예매 진행중';
        }

        return '';
    }

    checkTicketing() {
        if(this.props.ticketing === 'on') {
            return 'ticketing-on';
        }
        
        return '';
    }

    loadTitle(_content) {
        let _lists = [];
        let content = _content;
        let i = 0;

        while(i < content.length) {
            _lists.push(
                <button key={i}
                    className={"movie-title " + this.checkTicketing()}
                    onClick={function(e){
                        if(this.props.ticketing === 'off') {
                            alert('예매 버튼을 먼저 클릭해주세요.');
                        } else {
                            this.props.ticketingMovie(e.target.innerText);
                        }
                    }.bind(this)}
                >{content[i]}</button>
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
                    <div className="topic-content">
                        <div className="movie">
                            <div className="topic-name">
                                {this.props.topic[i]}
                            </div>
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

    checkDevice() {
        let _article = null;
        
        if(window.innerWidth >= 768) {
            _article = 
            <div className="interaction-box">
                <div className="lightskyblue-box">{this.onCheckTicket()}</div>
                <div className="whiteOpacity-box-1"></div>
                <div className="whiteOpacity-box-2"></div>
                <div className="ticketing-box">
                    <button onClick={function(){
                        this.props.onChangeTicketing('on');
                    }.bind(this)}>예매</button>
                </div>
                <div className="cancel-button"
                    onClick={function(){
                        this.props.onChangeTicketing('off');
                    }.bind(this)}
                ></div>
            </div>
        } else {
            _article = 
            <div className="mobile-box">
                <div className="lightskyblue-box">{this.onCheckTicket()}</div>

                <div className="ticketing-box">
                    <button onClick={function(){
                        this.props.onChangeTicketing('on');
                    }.bind(this)}>예매</button>
                </div>
                <div className="cancel-button"
                    onClick={function(){
                        this.props.onChangeTicketing('off');
                    }.bind(this)}
                ></div>
            </div>
        }

        return _article;
    }

    render() {
        return(
            <section className="vending-machine">
                <div className="container">
                    <div className="exhibition-poster">
                        {this.loadTopic()}
                        <div className="push-box">
                            Push
                        </div>
                    </div>

                    {this.checkDevice()}
                </div>
            </section>
        )
    }
}