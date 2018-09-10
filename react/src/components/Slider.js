import React, { Component } from 'react';


import slider1 from '../assets/images/pic_home_slider_1.jpg'
import slider2 from '../assets/images/pic_home_slider_2.jpg'
import slider3 from '../assets/images/pic_home_slider_3.jpg'
import slider4 from '../assets/images/pic_home_slider_4.jpg'


import '../assets/css/banner.css'
import '../assets/js/jquery.js'
import '../assets/js/responsiveslides.min.js'
// import '../assets/js/slider.js'

export default class Slider extends Component {
  render() {
    
    return (
        <div className="callbacks_container">
        <ul className="rslides" id="slider">
            <li><a href="javascript:;"><img src={slider1}/></a></li>
            <li><a href="javascript:;"><img src={slider2}/></a></li>
            <li><a href="javascript:;"><img src={slider3}/></a></li>
            <li><a href="javascript:;"><img src={slider4}/></a></li>
            <li><a href="javascript:;"><img src={slider2}/></a></li>
        </ul>
    </div>
    );
  }
  componentDidMount(){
    $(function () {
      $("#slider").responsiveSlides({
          auto: true,
          pager: false,
          nav: true,
          speed: 500,
          timeout:4000,
          pager: true, 
          pauseControls: true,
          namespace: "callbacks"
      });
  });
  }

}