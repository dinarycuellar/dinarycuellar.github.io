import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navigation/>
        <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
