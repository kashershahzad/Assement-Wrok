import React from 'react'
import Navbar from '@/component/Navbar'
import Hero from '@/component/Hero/Hero'
import Info from "@/component/Info/Info"
import People from '@/component/People/People'
import Feature from '@/component/Feature/Feature'
import Feature2 from '@/component/Feature/Feature2'
import Feature3 from '@/component/Feature/Feature3'
import Feature4 from '@/component/Feature/Feature4'
import Security from '@/component/Secruity/Security'
import Contact from '@/component/Contact/Contact'
import Footer from '@/component/Footer'
import MobileHero from '@/component/MobileHero/MobileHero'
import MobileNavbar from '@/component/MobileNavbar'

const Page = () => {
  return (
    <div>

      {/* MobileHero will be visible on small screens (default), hidden on lg and larger */}
      <div className="block lg:hidden">
        <MobileNavbar />
        <MobileHero />
      </div>
      {/* Hero will be hidden on small screens and visible on lg and larger */}
      <div className="hidden lg:block">
        <Navbar />
        <Hero />
        <Info />
        <People />
      </div>
      <Feature />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Security />
      <Contact />
      <Footer />
    </div>
  )
}

export default Page
