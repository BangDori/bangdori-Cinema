import React, { Component } from 'react';
import Head from './components/Head';
import Body from './components/Body';
import Foot from './components/Foot';
import './assets/menu.css';
import './assets/app.css';
import './assets/ticketing.css';

// 낮은 해상도의 PC, 태블릿 가로 : ~768px
// 모바일 가로, 태블릿 : 480px ~ 767px 준비중!

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      search: 'off',
      menu: 'off',
      section: 1,
      button: [
          {id: 1, name: '한국 영화'},
          {id: 2, name: '외국 영화'}
      ],
      topic: ['액션', '코미디', '판타지'],
      koreaMovie: [
        ['아저씨', '암살', '베테랑', '범죄도시', '마녀'],
        ['7번방의 선물', '극한 직업', '수상한 그녀', '과속 스캔들', '써니'],
        ['설국열차', '괴물', '신과함께', '승리호', '전우치']
      ],
      foreignMovie: [
        ['테이큰', '샌 안드레아스', '메이즈러너', '존윅', '킹스맨'],
        ['스파이', '킬러의 보디가드', '리틀맨', '세 얼간이', '데드풀'],
        ['판의 미로', '신비한 동물사전', '반지의 제왕', '해리포터', '헝거게임']
      ],
      ticketing: 'off',
      selectedMovie: {mode: 'off', title: 'none'},
      reservation_history: [],
    }
  }

  checkSection() {
    if(this.state.section === 1) {
      return this.state.koreaMovie;
    } else {
      return this.state.foreignMovie;
    }
  }

  checkDevice() {
    let _screen = null;
    if(window.innerWidth >= 768) {
      _screen =
      <div className='App'>
        <Head
          search={this.state.search}
          menu={this.state.menu}
          onChangeQuery={function(_search){
            this.setState({
                search: _search,
            })
          }.bind(this)}
          onMenu={function(_menu){
            this.setState({
              menu: _menu,
            })
          }.bind(this)}
        ></Head>

        <Body
          ticketing={this.state.ticketing}
          section={this.state.section}
          button={this.state.button}
          topic={this.state.topic}
          content={this.checkSection()}
          onChangeSection={function(_section){
            this.setState({
              section: Number(_section),
            })
          }.bind(this)}
          onChangeTicketing={function(_ticketing){
            this.setState({
              ticketing: _ticketing,
            })
          }.bind(this)}
          ticketingMovie={function(_title){
            this.setState({
              selectedMovie: {mode: 'on', title: _title},
            })
          }.bind(this)}
        ></Body>

        <Foot></Foot>

        {this.openMenu()}
        {this.openTicketing()}
      </div>
    } else {
      _screen = 
      <div className='App'>
        <h1>준비중입니다.</h1>
      </div>
    }

    return _screen;
  }
  
  openMenu() {
    let _modal = null;

    if(this.state.menu === 'on') {
      _modal = 
      <div className="js-menu openMenu">
        <div className="content">
          <button onClick={function(e){
            alert('서비스를 준비중입니다.')
          }}>로그인</button>
          <button onClick={function(e){
            console.log(this.state.reservation_history);
          }.bind(this)}
          >예약 상황</button>
        </div>
      </div>
    }

    return _modal;
  }

  openTicketing() {
    let _modal = null;

    if(this.state.selectedMovie.mode === 'on') {
      _modal =
      <div className="js-modal">
        <div className="modal">
          <div className="reservation-box">
            <img
              className="cancel"
              src="/images/cancel.png"
              alt="cancel button"
              onClick={function(){
                this.setState({
                  selectedMovie: {mode: 'off'},
                })
              }.bind(this)}
            />
            <div className="reservation-movie">
              <div className="movie-title">
                {"<" + this.state.selectedMovie.title + ">"}
              </div>
              <div className="movie-poster">
                <img src={this.getCountry() + this.state.selectedMovie.title + ".jpg"} alt="movie poster" />
              </div>
            </div>
            <div className="seat-availability">
              <div className="seat-title">
                {"<좌석 현황>"}
              </div>
              <div className="movie-screen">
                <div className="screen">
                  Screen
                </div>
              </div>
              <div className="reservation-seat">
                {this.getRowSeat(this.state.selectedMovie.title)}
              </div>
              <div className="buy-button">
                <button onClick={function(e){
                  let selected_seat = document.querySelectorAll(".selected");

                  if(selected_seat === null || selected_seat === undefined) {
                    alert('좌석은 먼저 선택헤주세요.');
                  }

                  let _reservation_history = Array.from(this.state.reservation_history);
                  if(window.confirm("좌석을 예매하시겠습니까?")) {
                    selected_seat.forEach((seat) => {
                      seat.classList.remove("selected");
                      seat.classList.add("booked");
                      
                      _reservation_history.push(seat.id);
                    })
                    
                    this.setState({
                      reservation_history: _reservation_history,
                    })

                    alert('정상적으로 예매되셨습니다.');
                  }
                }.bind(this)}>예매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    }

    return _modal;
  }

  getCountry() {
    if(this.state.section === 1) {
      return "/images/korea/";
    } else {
      return "/images/foreign/";
    }
  }

  getRowSeat(_title) {
    let _seats = [];
    let i = 1;

    while(i <= 5) {
      _seats.push(
        <div key={i}>
          {this.getColSeat(i, _title)}
        </div>
      )

      i += 1;
    }

    return _seats;
  }

  getColSeat(index, _title) {
    let _lists = [];
    let i = 1;

    while (i <= 15) {
      let _id = _title + "-" + index + "-" + i;
      _lists.push(
        <button
          key={index + "," + i}
          id={_id}
          className={this.checkBookMovie(_id)}
          onClick={function(e){
            if(e.target.className === 'unSelected') {
              e.target.className = 'selected';
            } else if(e.target.className === 'selected') {
              e.target.className = 'unSelected';
            } else if(e.target.className === 'booked') {
              alert('이미 예약된 좌석입니다.');
            }
          }}
        ></button>
      )

      i += 1;
    }

    return _lists;
  }

  checkBookMovie(id) {
    if(this.state.reservation_history.includes(id)) {
      return 'booked';
    } else {
      return 'unSelected';
    }
  }

  render() {
    return (
      <div className="Screen">
        {this.checkDevice()}
      </div>
    )
  }
}

export default App;