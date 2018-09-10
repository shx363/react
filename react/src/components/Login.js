import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../assets/css/login.css'
import {connect} from 'react-redux';
import * as types from '../store/types'
class Login extends Component {
    // constructor(props){
    //   super();
    //   this.state = {
    //     username:'',
    //     password:''
    //   }
    //   let url=`/data/user.json`;
    //   props.update(url)
    //   this.login=this.login.bind(this);
    //   this.changeIpt=this.changeIpt.bind(this);
    // }
    render() {
        return (
            <div className="login">
                <div className="top">
                    <div className="box">
                        <a href="javascript:window.history.go(-1);" className="return"><img src="/images/return.png"/></a>
                        登录  
                    </div>
                </div>
                <img src="/images/pic_home_slider_3.jpg" className="lo_logo"/>

                   <div className="login_lo">
                            <div className="box">
                                        <div className="lo_1">
                                            <img src="/images/yong.png"/>
                                            <input id="username" type="text" name="username"/>
                                        </div>
                                        <div className="lo_1">
                                            <img src="/images/mi.png"/>
                                            <input id="password" type="text" name="password"/>
                                        </div>
                                        <a href="javascript:;" className="lo_login" onClick={this.props.login}>登录</a>
                                        <Link to="/register" className="resi">免费注册</Link>
                            </div>
                </div>
            </div>
            
        );
    }
}

  const mapStateToProps=state=>({

  });
  const mapDispatchToProps=(dispatch,props)=>{

    return{

    
    viewLoading:(bl)=>{dispatch({type:types.VIEW_LOADING,payload:bl})},
    login:()=>{
        var name = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        fetch(
            `/data/user.json`
        ).then(
            res => res.json()
        ).then(data=>{
            console.log(props)
            if(data.username==name&&data.password==pass){
                dispatch({type:"UPDATE_USER",payload:{
                    auth:true,
                    data:{
                        username:name
                    }
                  }})
                  props.history.push("/user")
            }else{
                alert("用户名或密码错误")
            }
        })
    
      }
      
    }
  };
  
  export default connect(
   mapStateToProps,
   mapDispatchToProps
  )(Login)