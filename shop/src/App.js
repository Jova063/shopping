import React, { Component } from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Contact from './pages/js/Contact';
import Home from './pages/js/Home';
import Magazin from './pages/js/Magazin';
import News from './pages/js/News';
import Skit from './pages/js/Skit'
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
          </Routes>
          </div>
       </Router>
      </div>
    )
  }
}