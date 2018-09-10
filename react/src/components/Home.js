import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as types from '../store/types'

import {asyncAction} from '../store/asyncAction'

import Slider from './Slider';
import List from './List';

// let  mounted=true;

class Home extends Component {
  constructor(props){
    super();
    let url=`/data/index.data`;
    props.update(url)
  
   
  }
  render() {
    return (
      <React.Fragment>
         <Slider/> 
         <List list={this.props.home}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps=state=>({
  home:state.home
});
const mapDispatchToProps=dispatch=>({
  // viewNav:(bl)=>{dispatch({type:type.VIEW_NAV,payload:bl})},
  // viewFoot:(bl)=>{dispatch({type:types.VIEW_FOOT,payload:bl})},
  viewLoading:(bl)=>{dispatch({type:types.VIEW_LOADING,payload:bl})},
  update:(url)=>{dispatch(asyncAction(url,dispatch,types.UPDATE_HOME))}

});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Home)