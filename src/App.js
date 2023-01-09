import React, { Component } from 'react';
import Head from './components/Head';
import Body from './components/Body';
import Foot from './components/Foot';
import './assets/menu.css';
import './assets/app.css';


// 낮은 해상도의 PC, 태블릿 가로 : ~768px
// 모바일 가로, 태블릿 : 480px ~ 767px
// 준비중!

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
          section={this.state.section}
          button={this.state.button}
          topic={this.state.topic}
          content={this.checkSection()}
          onChangeSection={function(_section){
            this.setState({
              section: Number(_section),
            })
          }.bind(this)}
        ></Body>

        <Foot></Foot>

        {this.openModal()}
      </div>
    } else {
      _screen = 
      <div className='App'>
        <h1>준비중입니다.</h1>
      </div>
    }

    return _screen;
  }
  
  openModal() {
    let _modal = null;

    if(this.state.menu === 'on') {
      _modal = 
      <div className="js-menu openMenu">
        <div className="content">
          <button onClick={function(e){
            alert('서비스를 준비중입니다.')
          }}>로그인</button>
          <button>예약 상황</button>
        </div>
      </div>
    }

    return _modal;
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