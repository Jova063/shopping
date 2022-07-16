import React, { Component } from 'react'
import {MdAddShoppingCart} from "react-icons/md"
import img1 from "../img/yangi.png"
import img2 from "../img/klipartz.jpg"
import "../css/Cards.css"
const data=require("../js/new") 
const foto=require("../js/foto")


export default class cards extends Component {
  render() {
    return (
      <div>
          <section className='news'>
        <div className='news_top'>
          <h1 className='news_text'>Новинки </h1>
          <a href='#!' className='news_link'>Все категории</a>
           </div>
          <div className='card_wrapper'>
            {data.map(item=>{
              return <div className=' '>
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
          <h1 className='skit_text'>Хиты продаж </h1>
          <a href='#!' className='skit_link'>Все товары в категории </a>
           </div>
          <div className='card_wrapper'>
            {data.map(item=>{
              return <div className='card_list'>
                <img src={img1} alt="" className='card_img'/>
                <div className='card_text'>
                <span className='skit_text_span'>Хит</span>
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
