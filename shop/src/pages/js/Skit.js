import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Cards from './Cards'

export default class skit extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Cards/>
        <Footer/>
      </div>
    )
  }
}
