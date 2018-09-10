import React, { Component } from 'react';
import '../assets/css/detail.css';
import * as types from '../store/types';
import {asyncAction2} from '../store/asyncAction';
import {connect} from 'react-redux';

class Detail extends Component {
    constructor(props){
        super();
        let url=`/data/detail.data`;
        // fetch(
        //   url
        // ).then(
        //   res=>res.json()
        // ).then(
        //   data=>this.setState({detail:data[props.match.params.id-1]})
        // )
        props.update(url,props.match.params.id)
      }
  render() {
    return (
      <div className="detail">
    <div className="top">
        <div className="box">
            <a href="javascript:window.history.go(-1);" className="return"><img  style={{marginLeft:10}} src="/images/return.png"/></a>
            详情   
        </div>
    </div>
            <div className="tozije_f">
            <div className="tozije_f_in">
                <ul>
                    <li>
                        <em>金额</em>
                        <p><font>￥</font>{this.props.detail.money}万</p>
                    </li>
                    <li>
                        <em>年利率</em>
                        <p><font></font>{this.props.detail.rate}</p>
                    </li>
                    <li>
                        <em>期限</em>
                        <p><font></font>{this.props.detail.month}个月</p>
                    </li>
                    <li className="mark4_f2">
                        <span>
                            <img style={{height:this.props.detail.percent1}} src="/images/redbl.png"/>
                            <p>{this.props.detail.percent1}</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="contain">{this.props.detail.content}</div> 
</div>
    )
  }
}

const mapStateToProps=state=>({
    detail:state.detail
  });
  const mapDispatchToProps=dispatch=>({
    // viewNav:(bl)=>{dispatch({type:type.VIEW_NAV,payload:bl})},
    // viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})},
    viewLoading:(bl)=>{dispatch({type:types.VIEW_LOADING,payload:bl})},
    update:(url,id)=>{dispatch(asyncAction2(url,dispatch,types.UPDATE_DETAIL,id))}
  
  });
  
  export default connect(
   mapStateToProps,
   mapDispatchToProps
  )(Detail)