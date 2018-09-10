import React, { Component } from 'react';
import '../assets/css/invest.css'
import {connect} from 'react-redux';
import * as types from '../store/types'
import {asyncAction} from '../store/asyncAction';
 class Invest extends Component {
     constructor(props){
            super();
            let url=`/data/invest.data`;
            props.update(url)
        }
  render() {
    return (
      <div className="invest">
         <div className="top">
            <div className="box1">
                <a href="javascript:window.history.go(-1);" className="return"><img  style={{marginLeft:10}} src="/images/return.png"/></a>
                投资    
            </div>
        </div>
        {
             this.props.invest.map((item,index)=>(
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

                            <a href="#">
                                <div className="novice_zs_f_in_r">
                                <span><img src="/images/lijitoubiao.png"/></span>
                                </div>
                            </a>
            </div>
        </div> 
            ))
        }
       
    </div>
    );
  }
}


const mapStateToProps=state=>({
    invest:state.invest
  });
  const mapDispatchToProps=dispatch=>({
    // viewNav:(bl)=>{dispatch({type:type.VIEW_NAV,payload:bl})},
    // viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})},
    viewLoading:(bl)=>{dispatch({type:types.VIEW_LOADING,payload:bl})},
    update:(url)=>{
        {dispatch(asyncAction(url,dispatch,types.UPDATE_INVEST))}
      }
  
  });
  
  export default connect(
   mapStateToProps,
   mapDispatchToProps
  )(Invest)