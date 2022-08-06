import React, { Component } from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { MdAddShoppingCart } from "react-icons/md"
import "../css/Cards.css"
import img1 from "../img/yangi.png"
import img2 from "../img/klipartz.jpg"
import axios from 'axios'

const data=require("../js/new") 


const foto=require("../js/foto")
export default class News extends Component {
  state = {
    data: data,
    buy:[],
    data2:[]
  }
  getPraducts=()=>{
    axios.get('http://shop.abrorjonaxmadov.uz/api/v1/products/')
    .then(res=>{
      this.setState({data2:res.data})
      console.log(this.state.data2);
    })
    .catch(err=>{
      console.log('xas');
    })
  }
  shop=(title, img, sum, skit)=> {
    var push= true;
    var data1 = {
      'title': title,
      'img': img,
      'sum': sum,
      'skit': skit,
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
    this.getPraducts()
  }
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <section className='news'>
        <div className='news_top1'>
        <a href='/'><HiOutlineArrowNarrowLeft className='skit_icon' /></a>
          <h1 className='news_text'>Новинки </h1>
           </div>
          <div className='card_wrapper'>
          {this.state.data2.map((item)=>{
              
              return <div className=' '>
                <img src={item.thumbnail!==null?(item.thumbnail.image):(img1)} alt="" className='card_img'/>
                <div className='card_text'>
                    <p className='card_title'>{item.title}</p>
                    <p className='card_sum'>{item.in_promotion!==null?(item.in_promotion.percentage):(0)}%</p>
                    <p className='card_skit'>{item.price}</p>
                    <div className='card_button'>
                       <select className='card_drop'>
                          <option>1 шт</option>
                          <option>2 шт</option>
                          <option>3 шт</option>
                       </select>
                       <div className='card_icons' onClick={()=> this.shop(item.title,item.thumbnail.image,item.price,item.xit,item.skit)}>
                         <MdAddShoppingCart className="card_icon"/>
                       </div>
                    </div>
                </div>
              </div> }
            )}
            
          </div>

       
      </section>
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
