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

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <People />
      <Feature />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Security />
      <Contact />
    </div>
  )
}

export default page