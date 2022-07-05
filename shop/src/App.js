import React, { Component } from 'react'
import '../src/App.css'
import { BsTelephone} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
export default class App extends Component {
  render() {
    return (
      <div>
       <navbar className='navbar'>
              <div className='navbar_top'>
                <BsTelephone/>
                <p className='tel_nomber'>+998 (99) 000 00 00</p>
                <ImLocation/>
                <p className='tel_location'>Ташкент</p>
              </div>

       </navbar>
      </div>
    )
  }
}