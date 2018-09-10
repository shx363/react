import React, { Component } from 'react';
import '../assets/css/register.css'

export default class Register extends Component {
  render() {
    return (
      <div id="register">
         <div className="top">
            <div className="box">
                <a href="javascript:window.history.go(-1);" className="return"><img  src="/images/return.png"/></a>
                注册    
            </div>
        </div>


<div className="re_lo">
	<div className="box2">
            <div className="re_1 re_2">
                <span>手机号</span>
                <input type="text" />
            </div>
            <div className="re_1 re_2">
                <span>验证码</span>
                <input type="text" className="yzm" />
                <div className="yan">
                        <input type="button" id="btn" className="btn_mfyzm" value="获取验证码" />

                </div>            
            </div>
            <div className="re_1 re_2">
                <span>邀请码</span>
                <input type="text"/>
            </div>
            <div className="re_1 re_2">
                <span>密码</span>
                <input type="text"/>
            </div>
            <div className="re_1 re_2">
                <span>确认密码</span>
                <input type="text" />
            </div>
            <div className="re_1 re_2">
                <span>客服人员</span>
                <select>
                    <option>请选择客服</option>
                    <option>客服人员一</option>
                    <option>客服人员二</option>
                    <option>客服人员三</option>
                </select>
            </div>
            <a href="#" className="re_login">注册</a>
    </div>
</div> 

</div>
    );
  }
}