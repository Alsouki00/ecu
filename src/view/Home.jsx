import React from 'react'
import Textsection from '../components/Textsection'
import Brands from '../components/Brands'
import Featuers from '../components/Featuers'
import Carusel from '../components/Carusel'
import Mymt from '../components/Mymt'
import CallPhone from '../components/CallPhone'
import Testimonials from '../components/Testimonials'
import Ask from '../components/Ask'
import Foot from '../components/Foot'




const Home = () => {
  return (
   
        <>
        
        <main>
        <Textsection />
        <Brands />
        <Featuers />
        <Carusel />
        <Mymt />
        <CallPhone />
        <Testimonials />
        <Ask />
        </main>
     
        </>

  )
}

export default Home