import React, { Component } from 'react';
import '../assets/css/more.css'
import jian from '../assets/images/jian.png'

export default class More extends Component {
  render() {
    return (
      <div className="more">
        <div className="projectd_f top ">
            <div className="projectd_f_in">
                <a href="javascript:window.history.go(-1);" className="return"><img src={jian}/></a>
                更多精彩
            </div>
        </div>

        <div className="anotherne_f">
                    <div className="anotherne_f_in">
                        <ul>
                            <li>幸运大抽奖<a href="Luck draw.html"></a></li>
                            <li>关于我们<a href="about.html"></a></li>
                            <li>帮助中心<a href="help.html"></a></li>
                            <li>网站公告<a href="notice.html"></a></li>
                        </ul>
                    </div>
        </div>
    </div>
    );
  }
}