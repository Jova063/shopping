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
export default class App extends Component {
  render() {
    return (
      <div> 
       
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
       </Router>
      </div>
    )
  }
}