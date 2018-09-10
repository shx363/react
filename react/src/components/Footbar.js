import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import '../assets/css/footbar.css'
import zhuye from '../assets/images/zhuye.png'
import touzi from '../assets/images/touzi.png'
import grzx from '../assets/images/grzx.png'
import mores from '../assets/images/mores.png'

export default class Footbar extends Component {
  render() {
    return (
      <div className="footerdhl_f">

        <NavLink activeClassName="movek_f"
        to="/home"
        >   
                <b><img src={zhuye}/></b>
                <p>首页</p>
        </NavLink>  

        <NavLink activeClassName="movek_f"
        to="/invest"
        >   
                <b><img src={touzi}/></b>
                <p>投资</p>
        </NavLink> 

         <NavLink activeClassName="movek_f"
        to="/user"
         >   
                <b><img src={grzx}/></b>
                <p>账户</p>
        </NavLink> 

        <NavLink activeClassName="movek_f"
        to="/more"
        >   
                <b><img src={mores}/></b>
                <p>更多</p>
        </NavLink>

</div>
    );
  }
}