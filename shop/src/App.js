import React, { Component } from 'react'
import '../src/App.css'
import Navbar from './pages/js/Navbar'
import Cards from './pages/js/Cards'
import img from "./pages/img/kamera.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
import Footer from './pages/js/Footer'
export default class App extends Component {
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
      <Footer/>
       
      </div>
    )
  }
}