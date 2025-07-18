import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular';
import Offers from '../components/Offers';
import NewCollections from '../components/NewCollections';
import NewsLetter from '../components/NewsLetter';
// import Footer from '../components/Footer';



function Shop() {
  return (
    <>
      
      <Hero />
      <Popular />
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      {/* <Footer/> */}
    </>
  );
}

export default Shop