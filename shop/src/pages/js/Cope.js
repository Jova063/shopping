import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import "../css/Cards.css"
import img2 from "../img/klipartz.jpg"
import '../css/Cope.css'
const foto=require("../js/foto")

export default class Cope extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='cope'>
          <div className='cope_top'>
            <a href='/basket'><HiOutlineArrowNarrowLeft className='cope_icon'/></a>
            <h1 className='cope_title'>Персональные данные</h1>
          </div>
            <div className='cope_middle'>
              <div className='cope_left'>
                <p className='cope_ism'>Имя</p>
                <input type='text' placeholder='ЭЛЁРБЕК' className='input_ism'/>
                <p className='cope_familiya'>Фамилия</p>
                <input type='text' placeholder='ЮСУПЖОНОВ' className='input_familiya'/>
                <p className='cope_nomer'>Телефонный номер</p>
                <input type='number' placeholder='+99 899 000 00 00' className='input_nomer'/>
                <p className='cope_email'>Электронной почты </p>
                <input type='email' placeholder='grafikdesigner@gmail.com' className='input_email'/>
                <button className='cope_button'>Отправить</button>
              </div>
              <div className='cope_right'>
                <h4 className='cope_right_title'>Итого:</h4>
                <div className='cope_right_info'>
                  <p className='cope_right_p'>Товары, 4 шт.</p>
                  <p className='cope_right_sum'>40 418 474.34 сум</p>
                </div>
                <div className='cope_right_info'>
                  <p className='cope_right_p'>Скидка</p>
                  <p className='cope_right_sum'>-14 145 394 сум</p>
                </div>
                <div className='cope_right_info'>
                  <p className='cope_right_p'>Общая сумма:</p>
                  <p className='cope_right_sum'>26 273 080.34 сум</p>
                </div>
                <h6 className='cope_right_botton'>Нажимая 'Оформить заказ', я соглашаюсь с <span>публичным договором оферты</span></h6>
                <p className='cope_footer'>Для расчета стоимости доставки крупногабаритного товара весом более 5 кг обращайтесь к оператору Call-центра* <br/>
* Может взыматься дополнительная плата за доставку в труднодоступные места, (например крупногабаритная техника, которую нужно доставить в дома, с неработающим лифтом)<br/>
** При необходимости</p>
                


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
        <Footer/>
      </div>
    )
  }
}
