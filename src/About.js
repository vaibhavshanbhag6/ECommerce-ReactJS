import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

  const data = {
    name : "E-Store"
  }
  return (
    <HeroSection myData={data}></HeroSection>
  )
}

export default About