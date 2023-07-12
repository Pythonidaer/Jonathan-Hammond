import Image from 'next/image'
import Hero from './(components)/Hero'
import About from './(components)/About'
import Portfolio from './(components)/Portfolio'
import Contact from './(components)/Contact'

// import SectionFive from './(components)/SectionFive'
//      {/* <SectionFive /> */}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}
