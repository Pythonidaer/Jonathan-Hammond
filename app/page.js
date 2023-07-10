import Image from 'next/image'
import Hero from './(components)/Hero'
import SectionTwo from './(components)/SectionTwo'
import SectionThree from './(components)/SectionThree'
import SectionFour from './(components)/SectionFour'
import SectionFive from './(components)/SectionFive'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  )
}

/*
bg-gradient-to-b from-black to-blue-500
*/
