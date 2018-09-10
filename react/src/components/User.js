import React, { Component } from 'react';
import '../assets/css/user.css'

export default class User extends Component {
  render() {
    return (
      <div className="User">
        <div className="top">
                <div className="box">
                    <a href="javascript:window.history.go(-1);" className="return" ><img src="/images/return.png"/></a>
                    我的账户    
                </div>
        </div>
<div className="user">
	<div className="box">
        <a href="javascript:;">
            <img src="/images/tou.png"/>
                <div className="us_yong">
                    <span>欢迎您<em className="mingzi">{this.props.userdata.username}</em><img src="/images/vipdbj2.png"/></span>
                    <span>账户总额：￥12133132</span>
					<span className="zhuxiao">[注销]</span>
                </div>
        </a>
    <div className="vipczjdu">

            <div className="vipdu_t">
                <span>
                    <p></p>
                </span>￥
                <em>50000</em>
            </div>
        <div className="vipdu_b">
        	<span>代收金额：</span>
       		<i>￥</i>
        	<i className="nans">2000</i>
            <span>距离成为vip还差:</span>
            <i>￥22222</i>
            <b></b>
        </div>
    </div>
    <div className="us_ke">
        	<span className="yue">
            	<i>可用余额（元）</i>
                <em>134543</em>
            </span>
            <span>
            	<i>冻结总额（元）</i>
                <em>134543</em>
            </span>
        </div>
    </div>
</div>
<div className="us_rec">
    <span><a href="javascript:;">充值</a></span>
    <span className="tixian"><a href="javascript:;">提现</a></span>
</div>

<div className="xinfuer_t">
	<a href="#">
    	<b><img src="/images/jkjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/hqlc_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/dqlc_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/sbtz_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/zqzr_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/zjtj_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/jyjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/zdtb_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/yqjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/hbgl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/jfgl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/cjjl_t.png"/></b>
    </a>
    <a href="liyijisuanqi.html">
    	<b><img src="/images/syjsq_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/tgmx_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/jjjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/xycj_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/yqm_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="/images/ewm_t.png"/></b>
    </a>
</div>
    </div>
    );
  }
}