import React, { Component } from 'react'
import "../css/Navbar.css"
import img from "../img/logo.jpg"
import {ImLocation} from 'react-icons/im'
import {GiHamburgerMenu} from "react-icons/gi"
import {HiShoppingCart} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <navbar className='navbar'>
              <div className='navbar_top'>
                <div className='navbar_top_about'>
                  <p className='navbar_top_about_text'>О нас </p>
                  <ImLocation className='navbar_top_about_link'/>
                  <p className='navbar_top_tel_location'>Ташкент</p>
                </div>
                <p className='navbar_top_tel_nomber'>  + 99899 000 00 00 <a href='#!' className='navbar_top_tel_nomber_text'>Заказать звонок</a></p>
              </div>
              <div className='navbar_middle'>
                 <img src={img} alt='logo' className='navbar_middle_logo'/>
                 <div className='navbar_middle1'>
                  <GiHamburgerMenu className='navbar_middle_burger'/>
                  <p className='navbar_middle_katalog'>Каталог</p>
                 </div>
                 <div className='navbar_middle2'>
                  <input placeholder='Что желаете найти?' type={Text} className="navbar_middle_input"/>
                  <BiSearch className='navbar_middle_search'/>
                 </div>
                 <div className='navbar_middle3'>
                  <HiShoppingCart className='navbar_middle_cart'/>
                  <p className='navbar_middle_karzinka'>Корзина</p>
                 </div>
              </div>

       </navbar>
      </div>
    )
  }
}
