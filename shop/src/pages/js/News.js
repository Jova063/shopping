import React, { Component } from 'react'
import Cards from './Cards'
import Footer from './Footer'
import Navbar from './Navbar'

export default class News extends Component {
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
