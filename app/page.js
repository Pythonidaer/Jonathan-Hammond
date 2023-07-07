import Image from 'next/image'
import Hero from './(components)/Hero'
import SectionTwo from './(components)/SectionTwo'
import SectionThree from './(components)/SectionThree'

export default function Home() {
  return (
    <>
      <h1 className='text-center uppercase py-5 font-mono'>
        <span className='text-6xl md:text-9xl'>Jon</span>
        <span className='text-md inline-block text-1xl md:text-4xl transform rotate-90 relative top-[-12px] md:top-[-25px]'>
          The
        </span>
        <span className='text-6xl md:text-9xl'>Dev</span>
      </h1>
      <Hero />
      <SectionTwo />
      <SectionThree />
    </>
  )
}
