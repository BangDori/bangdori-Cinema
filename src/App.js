import React, { Component } from 'react';
import Head from './components/Head';
import Body from './components/Body';
import Foot from './components/Foot';
import './menu.css';
import './app.css'


// 낮은 해상도의 PC, 태블릿 가로 : ~768px
// 모바일 가로, 태블릿 : 480px ~ 767px
// 준비중!

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      search: 'off',
      menu: 'off',
    }
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
      <div className="App">
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
        <Body></Body>
        <Foot></Foot>

        {this.openModal()}
      </div>
    )
  }
}

export default App;