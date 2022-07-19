import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../img/kontact.png'
import'../css/Contact.css'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className='contact'>
          <div className='contact_left'>
            <h1 className='contact_title'>Контакты</h1>
            <div className='contact_text'>
              <div className='contact_text_left'>
                <p className='contact_teaxt_p'>+ 375 434 847 28 84</p>
                <p className='contact_teaxt_p'>+ 375 448 473 09 48</p>
                <p className='contact_teaxt_p'>designers@gmail.com</p>
              </div>
              <div className='contact_text_right'>
                <p className='contact_teaxt_p'>г.Юнусабад</p>
                <p className='contact_teaxt_p'>Ул. Унверсам</p>
                <p className='contact_teaxt_p'>Д. 1, Кв. 43</p>
              </div>
            </div>
            <div className='contact_left_footer'>
              
            </div>
          </div>
          <div className='contact_right'>
            <img src={img} alt=''/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
