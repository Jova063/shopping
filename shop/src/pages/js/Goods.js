import React, { Component } from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import img from "../img/goods2.png"
import img1 from "../img/goods1.png"
import img2 from "../img/klipartz.jpg"
import "../css/Cards.css"
import '../css/Goods.css'
import 'antd/dist/antd.css';
const foto=require("../js/foto")
export default class Goods extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <div className='goods'>
          <div className='goods_top'>
            <a href='/'><HiOutlineArrowNarrowLeft className='goods_icon'/></a>
            <h1 className='goods_title'>Товары</h1>
          </div>
          <div className='goods_middle'>
            <div className='goods_left'>
              <img src={img} alt='' className='goods_img'/>
              <img src={img} alt=''/>
            </div>
            <div className='goods_middle1'>
              <img src={img1} alt=''/>
            </div>
            <div className='goods_right'>
              <p className='goods_info'>VINTER 2020 ВИНТЕР 2020 <br/> Арт. 890.321.44 <span>/  Под заказ на 4.04.2021<br/> SEEDRA Corn - Bodacious Hybrid Seeds for Indoor<br/> and Outdoor Planting</span></p>
              <div className='goods_summa'>
              <p className='goods_sum'>62 392,31 Сум</p>
              <div className='goods_mat'>
                <p className='goods_p'>+</p>
                <p className='goods_n'>1</p>
                <p className='goods_p'>-</p>
              </div>
              </div>
            </div>
          </div>
        </div>

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
        {/* <Footer/> */}
      </div>
    )
  }
}
