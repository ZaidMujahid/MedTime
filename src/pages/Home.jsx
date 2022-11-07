import React from 'react'
import Hero from '../components/Hero';
import Reminders from '../components/Reminders';
import MapNavigate from '../components/MapNavigate';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <main className="mx-auto justify-center items-center px-6 pt-20 md:px-8 lg:px-12 z-10">
        <Hero />
        <Reminders/>
        <MapNavigate/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home