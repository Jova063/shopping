import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { MdAddShoppingCart } from "react-icons/md"
import "../css/Cards.css"
import img1 from "../img/yangi.png"
import img2 from "../img/klipartz.jpg"

const skit1=require("../js/skit1") 

const foto=require("../js/foto")
export default class skit extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section className='skit'>
        <div className='skit_top'>
          <h1 className='skit_text'>Скидки <span className='skit_text_span'>%</span> </h1>
           </div>
          <div className='card_wrapper'>
            {skit1.map(item=>{
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
          <div className='card_wrapper'>
            {skit1.map(item=>{
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
          <div className='card_wrapper'>
            {skit1.map(item=>{
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
        <Footer/>
      </div>
    )
  }
}
