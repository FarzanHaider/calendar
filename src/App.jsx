import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Janurary from './components/Janurary'
import Feburary from './components/Feburary'
import March from './components/March'
import April from './components/April'
import May from './components/May'
import June from './components/June'
import July from './components/July'
import August from './components/August'
import September from './components/September'
import October from './components/October'
import November from './components/November'
import December from './components/December'


function App() {
  return (
    <>

    
    
 
    

      <BrowserRouter>
      <Nav/>
      <Routes>
      
        <Route path="/Janurary" element={<Janurary/>} />
          <Route path="/Feburary" element={<Feburary/>} />
          <Route path="/March" element={<March/>} />
          <Route path="/April" element={<April/>} />
          <Route path="/May" element={<May/>} />
          <Route path="/June" element={<June/>} />
          <Route path="/July" element={<July/>} />
          <Route path="/August" element={<August/>} />
          <Route path="/September" element={<September/>} />
          <Route path="/October" element={<October/>} />
          <Route path="/November" element={<November/>} />
          <Route path="/December" element={<December/>} />
       
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
