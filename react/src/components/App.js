import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'


import Navbar from './Navbar';
import  Home from './Home';
import Footbar from './Footbar'
import Invest from './Invest'
import Detail from './Detail'
import Login from './Login'
import Register from './Register'
import More from './More'
import User from './User'
import Error from './Error'
import Loading from './loading'

import {connect} from 'react-redux'
import * as types from '../store/types'
import AuthUser from '../guard/AuthUser';


 class App extends Component {
  render() {
    let path=this.props.location.pathname;
    let {bFoot,bLoading,viewFoot,viewLoading}=this.props;
    if(/home|user|detail/.test(path)){
       setTimeout(()=>{
        viewFoot(true);
       },0)
    }
    if(/invest|more|login|register/.test(path)){
      setTimeout(()=>{
         viewFoot(false);
        },0)
    }
    return (
      <React.Fragment>
        {bLoading && <Loading/>}
        <Navbar/>
        <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/invest" component={Invest}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/more" component={More}/>
        <AuthUser path="/user" component={User}/>
        <Redirect exact from="/" to="/home"/>
        <Route component={Error}/>
        </Switch>
        {bFoot && <Footbar/>}
      </React.Fragment>  
    )
  }
}

const mapStateToProps=state=>({
    //  bNav:state.bNav,
     bFoot:state.bFoot,
     bLoading:state.bLoading
});
const mapDispatchToProps=dispatch=>({
    // viewNav:(bl)=>{dispatch({type:type.VIEW_NAV,payload:bl})},
    viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})},
    viewLoading:(bl)=>{dispatch({type:types.VIEW_LOADING,payload:bl})},

});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)