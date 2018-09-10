import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import querystring from 'query-string';
import '../assets/css/list.css'

export default class List extends Component {
  render() {
    return (
      <div className="list">

        <div className="data_f">
            <ul>
                <li>
                    <em>321,103,540</em>
                    <span>用户累计投资</span>
                </li>
                <li>
                    <em>321,103,540</em>
                    <span>用户累计收益</span>
                </li>
                <li>
                    <em>321,103,540</em>
                    <span>注册用户数量</span>
                </li>
            </ul>
        </div>

   <div className="display_f">

	<div className="display_f_in">
         {
             this.props.list.map((item,index)=>(
                <div className="fourcp_1"  key={index} >
                <div className="novice_zs_f_in" >
                                <div className="novice_zs_f_in_l">
                                                <div className="novice_zs_f_in_l_top">
                                                    <img src={item.src}/>
                                                    <span>{item.title}</span>
                                                </div>
                                             
                                                <div className="novice_zs_f_in_l_bottom">
                                                    <ul>
                                                        <li className="mark1_f">
                                                            <em>{item.rate}</em>
                                                            <p>年利率</p>
                                                        </li>
                                                        <li className="mark2_f">
                                                            <em><font>{item.month}<font>个月</font></font></em>
                                                            <p>期限</p>
                                                        </li>
                                                        <li className="mark3_f">
                                                            <em><font>￥</font>{item.money}<font>万</font></em>
                                                            <p>投资金额</p>
                                                        </li>
                                                        <li className="mark4_f">
                                                            <span>
                                                                <img style={{height:item.percent1}} src="/images/redbl.png"/>
                                                                <p>{item.percent1}</p>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                </div>
                                <div className="novice_zs_f_in_r">
                                    <Link 
                                    to={{pathname:'/detail/'+item.id,
                                    search:querystring.stringify({
                                        dataName:this.props.dataName
                                    })
                                }}
                                    ><span><img src="/images/lijitoubiao.png"/></span></Link>
                                </div>
                </div>
            </div>              
             ))
         }
    	
    </div>
 </div>

    </div>
    );
  }
}