import React from 'react'
import Navbar from '../components/navbar'
import WeAreCosmo from '../components/weAreCosmo'
import LookOurCreation from '../components/lookOurCreation'
import ImageCardHandler from '../components/imageCardHandler'
import YearsAndClients from './yearsAndClients'
import ClientCardHolder from '../components/clientCardHolder'
import Footer from '../components/footer'
import '../App.css'

function Home() {

  return (
    <React.Fragment>
      <Navbar/>
      <WeAreCosmo/>
      <LookOurCreation/>
      <ImageCardHandler/>
      <YearsAndClients/>
      <ClientCardHolder/>
      <Footer/>


    </React.Fragment>
  )
}

export default Home
