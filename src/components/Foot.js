import React, { Component } from 'react';
import '../assets/footer.css';

export default class Head extends Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return(
            <footer>
                <div className="title">
                    {"<"}영화 예매 사이트{">"}
                </div>
                <div className="describe">
                    뱅도리 시네마에서 원하는 영화를 예매하고 확인하세요!
                </div>
                <div className="myInfo">
                    자세한 사항은 아래 전화번호로 문의 해주시면 감사하겠습니다.
                    <br/>
                    전화번호: 010-8865-2981
                    깃허브: https://github.com/bangdori
                </div>
            </footer>
        )
    }
}