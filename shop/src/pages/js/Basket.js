import React, { Component } from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import "../css/Cards.css"
import '../css/Basket.css'
import img from "../img/goods2.png"
import img2 from "../img/klipartz.jpg"
const foto=require("../js/foto")

export default class Basket extends Component {
  state={
    buy:[],
    allprice:0,
    count:0,
  }
  plus=(key)=>{
    this.state.buy[key].count++;
    this.setState({})
    localStorage.setItem("names", JSON.stringify(this.state.buy));
    this.getsum()
  }
  getsum=()=>{
    var a=0;
    for(var i=0;i<this.state.buy.length;i++){
      a=a+this.state.buy[i].sum*this.state.buy[i].count
    }
    this.setState({allprice:a.toFixed(2)})}
    getcount=()=>{
      var a=0;
      for(var i=0;i<this.state.buy.length;i++){
        a=a+this.state.buy[i].count
      }
      this.setState({count:a})}
      
      
  minus=(key)=>{
    this.state.buy[key].count--;
    if(this.state.buy[key].count<1){
      this.state.buy.splice(key,1)
    }
    this.setState({})
    localStorage.setItem("names", JSON.stringify(this.state.buy));
    this.getsum()
    this.getcount()
  }

  delete=(key)=>{
    this.state.buy.splice(key, 1)
    this.setState({})
    localStorage.setItem('names', JSON.stringify(this.state.buy))
    this.getsum()
    this.getcount()
  }
  componentDidMount(){
    if(JSON.parse(localStorage.getItem("names"))==null){
    this.state.buy=[]
      this.setState({})
    }else{
      this.state.buy=JSON.parse(localStorage.getItem("names"))
      this.setState({})
    }
    setTimeout(() => {
      this.getsum();
      this.getcount()
    }, 100);
  }
  render() {
    return (
      <div>
        {/* <Navbar/> */}
        <div className='basket'>
          <div className='basket_top'>
            <a href='/'><HiOutlineArrowNarrowLeft className='basket_icon'/></a>
            <h1 className='basket_title'>Корзина</h1>
            <p className='basket_p'>{this.state.buy.length} предмета</p>
          </div>
          <div className='basket_middle'>
            <div className='basket_middle_left'>
              <div className='basket_middle_top'>
              <p className='basket_left_title'>PRODUCT DETAILS</p>
              <p className='basket_left_p1'>AMOUNT</p>
              <p className='basket_left_p2'>PRICE</p>
              <p className='basket_left_p3'>TOTAL</p>
              </div>
            {this.state.buy.map((item,key)=>{
             return  <div className='basket_middle1'>
                <div className='basket_middle1_left'>
                  <div className='basket_close' onClick={()=>{this.delete(key)}}>x</div>
                  <img src={img} alt='' className='basket_img'/>
                  <p className='basket_p1'>{item.title}</p>
                </div>
                <div className='basket_mat2'>
                    <p className='basket_p2' onClick={()=>{this.plus(key)}}>+</p>
                    <p classNa  me='basket_n2'>{item.count}</p>
                    <p className='basket_p2' onClick={()=>{this.minus(key)}}>-</p>
                  </div>
                  <p className='basket_p3'>{item.sum} Сум</p>
                  <p className='basket_p3'>{(item.sum*item.count).toFixed(2)} Сум</p>
              </div> 
            })}
            
              
            </div>
            <div className='basket_middle_right'>
              <h4 className='basket_right_title'>Итог заказа</h4>
              <div className='basket_right_info1'>
                <p className='basket_right_p1'>{this.state.buy.length} ПУНКТА</p>
                <p className='basket_right_sum1'>62 392,23 Сум</p>
              </div>
            <div className='basket_info'>
            <div className='basket_right_info'>
                  <p className='basket_right_p'>Товары, {this.state.count} шт.</p>
                  <p className='basket_right_sum'>{this.state.allprice} сум</p>
                </div>
                <div className='basket_right_info'>
                  <p className='basket_right_p'>Скидка</p>
                  <p className='basket_right_sum'>0 сум</p>
                </div>
                <div className='basket_right_info'>
                  <p className='basket_right_p'>Общая сумма:</p>
                  <p className='basket_right_sum'>{this.state.allprice} сум</p>
                </div>
            </div>
              <div className='basket_right_info2'>
                <p className='basket_right_p2'>Итого</p>
                <p className='basket_right_sum2'>{this.state.allprice} Сум</p>
              </div>
              
              <a href='/cope' ><button className='basket_button'>Продолжать</button></a>
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
        {/* <Footer/> */}
        
      </div>
    )
  }
}
