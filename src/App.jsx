import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Games from './components/Games'
import Footer from './components/Footer'
function App() {
  return (

    <div className='bg-[#171615]'>
      <Navbar />
      <Main/>
      <Games/>
      <Footer/>
    </div>
  )
}

export default App