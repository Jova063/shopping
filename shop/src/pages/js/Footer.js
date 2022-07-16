import React, { Component } from 'react'
import "../css/Footer.css"
import {BsTelephoneFill, BsInstagram, BsTwitter} from  "react-icons/bs"
import {FaFacebookF} from  "react-icons/fa"
import app from "../img/XMLID_228_.png"
import sam from "../img/samsung.png"
import hua from "../img/huave.png"
import mi from "../img/mi.png"
import img from "../img/footer.png"
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className='brends'>
            <h1 className='brends_title'>Популярные бренды</h1>
            <div className='brends_box'>
                <div className='brend_app'>
                    <img src={app} alt/>
                </div>
                <div className='brend_sam'>
                    <img src={sam} alt/>
                </div>
                <div className='brend_hua'>
                    <img src={hua} alt/>
                </div>
                <div className='brend_artel'>
                    <h6 className='brend_artel_text'>artel</h6>
                </div>
                <div className='brend_mi'>
                    <img src={mi} alt/>
                </div>
            </div>
        </section>
        <footer className='footer'>
            <div className='footer1'>
            <div className='footer_left'>
                <h6 className='footer_left_title'>иинформация</h6>
                <ul className='footer_left_text'>
                    <li className='footer_left_info'>О нас</li>
                    <li className='footer_left_info'>Условия использования </li>
                    <li className='footer_left_info'>Оплата и доставка</li>
                    <li className='footer_left_info'>Как заказать</li>
                    <li className='footer_left_info'>Вопросы и ответы</li>
                </ul>
             </div>
             <div className='footer_middle'>
                <h6 className='footer_middle_title'>КАТЕГОРИИ ТОВАРОВ</h6>
                <ul className='footer_middle_text'>
                    <li className='footer_middle_info'>Фотоаппараты</li>
                    <li className='footer_middle_info'>Объективы </li>
                    <li className='footer_middle_info'>Аксессуары для студии</li>
                    <li className='footer_middle_info'>Вспышки для фотоаппаратов</li>
                    <li className='footer_middle_info'>Аксессуары для камеры</li>
                    <li className='footer_middle_info'>Штативы</li>
                    <li className='footer_middle_info'>Видеокамеры</li>
                </ul>
             </div>
             <div className='footer_right'>
                <div className='footer_right_left'>
                    <div className='footer_right_top'>
                        <BsTelephoneFill className='footer_right_icon'/>
                        <p className='footer_right_p'>+99899 000 00 00</p>
                    </div> 
                    <div className='footer_right_button'>
                        <p>Yunusobod tumani -22 kvartal</p>
                        <p>Эл.почта: webdesigner@gmail.com</p>
                        <input placeholder='Поиск' type={Text} className='footer_right_input'/>
                    </div>
                </div>
                <div className='footer_right_right'>
                    <button className='footer_right_btn'>ЗАКАЗАТЬ ЗВОНОК</button>
                    <div className='footer_right_icons'>
                        <div className='footer_right_icon1'><FaFacebookF/></div>
                        <div className='footer_right_icon1'><BsInstagram/></div>
                        <div className='footer_right_icon1'><BsTwitter/></div>
                    </div>
                </div>
             </div>
            </div>
            <hr className='footer_hr'/>
            <div className='footer_button'>
                <img src={img} alt="" className='footer_button_img'/><p className='footer_button_p'>© 2022 Lift Media. All Rights Reserved. </p>
            </div>
        </footer>
      </div>  




    )
  }
}
