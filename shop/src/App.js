import React, { Component } from 'react'
import '../src/App.css'
import Navbar from './pages/js/Navbar'
import img from "./pages/img/kamera.png"
import img1 from "./pages/img/yangi.png"
import img2 from "./pages/img/klipartz.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"
import {MdAddShoppingCart} from "react-icons/md"
const data=require("./pages/js/new") 
const foto=require("./pages/js/foto")
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
      
      <section className='news'>
        <div className='news_top'>
          <h1 className='news_text'>Новинки </h1>
          <a href='#!' className='news_link'>Все категории</a>
           </div>
          <div className='card_wrapper'>
            {data.map(item=>{
              return <div className='card_list'>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.sum}</p>
                    <p className='card_skit'>{item.skit}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons'>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div>
            })}
            
          </div>
       
      </section>

      <section className='skit'>
        <div className='skit_top'>
          <h1 className='skit_text'>Новинки <span className='skit_text_span'>%</span> </h1>
          <a href='#!' className='skit_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper'>
            {data.map(item=>{
              return <div className='card_list'>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                <span className='skit_text_span'>12%</span>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.sum}</p>
                    <p className='card_skit'>{item.skit}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons'>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div>
            })}
            
          </div>
       
      </section>
      <section className='top'>
        <div className='top_top'>
          <h1 className='top_text'>Популярные категории </h1>
          <a href='#!' className='top_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper1'>
            {foto.map(item=>{
              return <div className='card_list1'>
                <img src={img2} alt="" className='card_img1'/>               
                    <p className='card_title1'>{item.title}</p>
              </div>
            })}
            
          </div>
       
      </section>
      <section className='skit'>
        <div className='skit_top'>
          <h1 className='skit_text'>Новинки <span className='skit_text_span'>%</span> </h1>
          <a href='#!' className='skit_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper'>
            {data.map(item=>{
              return <div className='card_list'>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                <span className='skit_text_span'>12%</span>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.sum}</p>
                    <p className='card_skit'>{item.skit}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons'>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div>
            })}
            
          </div>
       
      </section>
       
      </div>
    )
  }
}