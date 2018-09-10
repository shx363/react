import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import logo3 from '../assets/images/logo3.png'

import '../assets/css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
            <div className="top_f">
                <div className="top_f_in">
                    <NavLink to="/login"  className="login_f">登录</NavLink>
                    <NavLink to="/register" className="register_f">注册</NavLink>
                    <img src={logo3}/>
                </div>
            </div>
    );
  }
}

