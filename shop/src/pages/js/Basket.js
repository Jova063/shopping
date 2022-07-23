import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import "../css/Cards.css"
import img2 from "../img/klipartz.jpg"
const foto=require("../js/foto")

export default class Basket extends Component {
  render() {
    return (
      <div>
        <Navbar/>
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
