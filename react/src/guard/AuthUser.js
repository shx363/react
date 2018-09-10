import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import User from "../components/User";
import Login from "../components/Login";
import {asyncAction} from "../store/asyncAction";
import * as types from "../store/types";
import connect from "react-redux/es/connect/connect";

/*const AuthUser = (props)=>{
  console.log('路由守卫-前置');
  return null;
};*/

const AuthUser = ({component:Component, user,...rest}) => (
  <Route {...rest} render={(props)=>(
    user.auth ?
    <Component {...props} userdata={user.data} /> :
    <Redirect to="/login" />
  )} />
);

/*class AuthUser extends React.Component{
  state={
    hasAuth:false, //是否请求过
    auth:false,
    data:{}//预载数据
  };
  componentDidMount(){
    fetch(
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      res=>{
        this.setState({
          hasAuth:true,
          auth:res.auth,
          data:res.data
        })
      }
    )
  }
  render(){
    let {component:Component,...rest} = this.props;
    if (!this.state.hasAuth) return null; //如果没有求取数据,不渲染
    return (
      <Route {...rest} render={(props)=>(
        this.state.auth ?
          <Component {...props} data={this.state.data} /> :
          <Redirect to="/login" />
      )} />
    )
  }
}*/

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  /*update: (url) => {
    dispatch(asyncAction(url,dispatch,types.UPDATE_HOME))
  }*/
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUser)