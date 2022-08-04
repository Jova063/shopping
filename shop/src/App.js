import React, { Component } from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Basket from './pages/js/Basket';
import Contact from './pages/js/Contact';
import Cope from './pages/js/Cope';
import Goods from './pages/js/Goods';
import Home from './pages/js/Home';
import Magazin from './pages/js/Magazin';
import News from './pages/js/News';
import Skit from './pages/js/Skit'
import Xit from './pages/js/Xit';
import "../src/pages/css/Navbar.css"
import "../src/pages/css/Cards.css"
import img from "../src/pages/img/logo.jpg"
import {ImLocation} from 'react-icons/im'
import {GiHamburgerMenu} from "react-icons/gi"
import {HiShoppingCart} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import img1 from "../src/pages/img/yangi.png"
import { MdAddShoppingCart } from "react-icons/md"
import Footer from './pages/js/Footer';
const data=require('./pages/js/new.js')
const openModal=()=> {
    document.querySelector('.modal1').classList.toggle('open_modal')
 }
export default class App extends Component {
  state = {
    show:true,
    data:data,
    buy:[]
  }
  
  search=()=>{
    if(document.querySelector("#search").value==''){
      this.setState({show:true})
    }else{
      this.setState({show:false})
    }
  }

  shop=(title, img, sum,skit1,xit, skit)=> {
    var push= true;
    var data1 = {
      'title': title,
      'img': img,
      'sum': sum,
      'skit': skit,
      'skit1':skit1,
      'xit':xit,
      'count':1
    }
 
  if (this.state.buy[0]===null){
    this.state.buy.push(data1)
    push=false;
  }else{
    for(var i=0; i<this.state.buy.length; i++){
      if (this.state.buy[i].title===data1.title){
          this.state.buy[i].count++;
          push=false;
      }
    }
  }
  if(push){ this.state.buy.push(data1)}
  localStorage.setItem("names", JSON.stringify(this.state.buy));
  var storedNames = JSON.parse(localStorage.getItem("names"));
  console.log(storedNames); }
componentDidMount(){
  if(JSON.parse(localStorage.getItem("names"))==null){
    this.setState({buy:[]})
  }else{
    this.setState({buy:JSON.parse(localStorage.getItem("names"))})
  }
}
  render() {
    return (
      <div> 
        <div className='navbar'>
              <div className='navbar_top'>
                <div className='navbar_top_about'>
                  <p className='navbar_top_about_text'>О нас </p>
                  <ImLocation className='navbar_top_about_link'/>
                  <p className='navbar_top_tel_location'>Ташкент</p>
                </div >
                <p className='navbar_top_tel_nomber'>  + 99899 000 00 00 <a href='#!' className='navbar_top_tel_nomber_text'>Заказать звонок</a></p>
              </div>
              <div className='navbar_middle'>
                 <img src={img} alt='logo' className='navbar_middle_logo'/>
                 <div className='navbar_middle1'onClick={openModal}>
                  <GiHamburgerMenu className='navbar_middle_burger'  />
                  <p className='navbar_middle_katalog'>Каталог</p>
                 </div>
                 <div className='navbar_middle2'>
                  <input placeholder='Что желаете найти?' type={Text} id='search' onKeyUp={this.search} className="navbar_middle_input"/>
                  <BiSearch className='navbar_middle_search'/>
                 </div>
                 <div className='navbar_middle3'>
                  <HiShoppingCart className='navbar_middle_cart'/>
                  <a href='/basket' className='navbar_middle_karzinka'>Корзина</a>
                 </div>
              </div>
            <div className='modal1'>
              <ul className='modal_text'>
                <li><a href='/' className='modal_text_link'>Главная страница</a></li>
                <li><a href='/contact' className='modal_text_link'>Контакты</a></li>
                <li><a href='/mag' className='modal_text_link'>О магазине</a></li>
                <li><a href='/new' className='modal_text_link'>Новинки</a></li>
                <li><a href='/skit' className='modal_text_link'>Скидки</a></li>
                <li><a href='/xit' className='modal_text_link'>Хиты продаж</a></li>
                <li><a href='/goods' className='modal_text_link'>Товары</a></li>
              </ul>
            </div>

      </div>
       
      {this.state.show?(
        <Router>
        <div className="App">
         <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/contact' element={<Contact/>}></Route>
           <Route exact path='/mag' element={<Magazin/>}></Route>
              <Route exact path='/new' element={<News/>}></Route>
              <Route exact path='/skit' element={<Skit/>}></Route>
              <Route exact path='/xit' element={<Xit/>}></Route>
              <Route exact path='/goods' element={<Goods/>}></Route>
              <Route exact path='/basket' element={<Basket/>}></Route>
              <Route exact path='/cope' element={<Cope/>}></Route>
       </Routes> 
       </div>
    </Router>):(
      <div className='card12'>
      {data.map((item,key)=>{
        var k=0;
        if(item.title.includes(document.querySelector('#search').value)){
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
                       <div className='card_icons' onClick={()=> this.shop(item.title,item.img,item.sum,item.skit1,item.xit,item.skit)}>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div>
        
        }
      })
    } 
    </div>
    )}

    
      <Footer/>
      </div>
    )
  }
}