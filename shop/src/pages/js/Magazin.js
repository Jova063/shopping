import React, { Component } from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'
import img from '../img/magazin.png'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbDiscount2 } from 'react-icons/tb'
import { AiOutlineSafety } from 'react-icons/ai'
import { MdOutlinePublishedWithChanges } from 'react-icons/md'
import { GiMoneyStack } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'

import '../css/Magazin.css'
export default class Magazin extends Component {
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <div className='magazin'>
          <div className='magazin_left'>
            <h1 className='magazin_left_title'>о магазине</h1>
            <div className='magazin_left_card'>
              <div className='card_left'>1800+ отзывов</div>
              <div className='card_right'>Реальные отзывы На яндекс, гугл картах и вайлдберис</div>
            </div>
            <div className='magazin_left_card'>
              <div className='card_left'>4 <br/> <span className='span'>ГОДА</span></div>
              <div className='card_right'>Продаем казаные <br/> и аксессуары <br/> в Беларуси и <br/> России</div>
            </div>
            <div className='magazin_left_card'>
              <div className='card_left'><h1>официальный дилер</h1></div>
              <div className='card_right'>Работаем <br/> напрямую <br/>с  заводами<br/> и <span className='span_1' > имеем <br/> сертификаты</span></div>
            </div>
          </div>
          <div className='magazin_right'>
            <img src={img} alt=''/>
          </div>
        </div>
        <div className='wrapper1'>
            <h1 className='wrapper1_title'>почему выбирают нас</h1>
            <div className='wrapper1_card'>
              <div className='card1'>
                <div className='card1_icon'><TbTruckDelivery/></div>
                <h4 className='card1_title'>Доставка за 4 часа по Узбекистану</h4>
                <p className='card1_p'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt.</p>
              </div>
              <div className='card1'>
                <div className='card1_icon'><TbDiscount2/></div>
                <h4 className='card1_title'>Лучшая цена <br/>на рынке</h4>
                <p className='card1_p'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt.</p>
              </div>
              <div className='card1'>
                <div className='card1_icon'><AiOutlineSafety/></div>
                <h4 className='card1_title'>Пожизненная гарантия</h4>
                <p className='card1_p'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt.</p>
              </div>
              <div className='card1'>
                <div className='card1_icon'><MdOutlinePublishedWithChanges/></div>
                <h4 className='card1_title'>Вернем деньги если не понравится</h4>
                <p className='card1_p'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt.</p>
              </div>
              <div className='card1'>
                <div className='card1_icon'><GiMoneyStack/></div>
                <h4 className='card1_title'>Любые способы <br/>оплаты</h4>
                <p className='card1_p'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt.</p>
              </div>
              <div className='card1'>
                <div className='card1_icon'><BsFillPeopleFill/></div>
                <h4 className='card1_title'>Эксперты</h4>
                <p className='card1_p'>Sar kobelt: funktionsrätt. Kaliga avis. Kokror tvåhandsbeslut även om bena. Jigon speligen holigt.</p>
              </div>

            </div>
        </div>

        {/* <Footer/> */}
      </div>
    )
  }
}
