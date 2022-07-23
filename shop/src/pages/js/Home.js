import React, { Component } from 'react'
import '../../App.css'
import Navbar from './Navbar'
import Cards from './Cards'
import img from "../img/kamera.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
      <Navbar/>

      <Carousel fade className='carousel'>
 <Carousel.Item>
   <img
     className="w-80  carousel_img"
     src={img}
     alt=""
   />
   <h1 className='carousel_text'>Сanon EOS <span className='carousel_text_span'> R51</span></h1>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="w-80 carousel_img"
     src={img}
     alt=""
   />
<h1 className='carousel_text'>Сanon EOS <span className='carousel_text_span'> R52</span></h1>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="w-80 carousel_img"
     src={img}
     alt=""
   />
<h1 className='carousel_text'>Сanon EOS <span className='carousel_text_span'> R53</span></h1>
 </Carousel.Item>
 <Carousel.Item>
   <img
     className="w-80  carousel_img"
     src={img}
     alt=""
   />
<h1 className='carousel_text'>Сanon EOS <span className='carousel_text_span'> R54</span></h1>
 </Carousel.Item>
</Carousel>
     <Cards/>
     <Footer/></div>
    )
  }
}
