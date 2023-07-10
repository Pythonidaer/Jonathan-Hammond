import Image from 'next/image'
import model from '../../public/michael-angelo-david-crop.png'
import ScrollDownButton from './ScrollDownButton'

/* Hero Image should be redesigned, because it doesn't touch bottom of section container*/
const Hero = () => {
  return (
    <section
      className='flex justify-center items-center relative overflow-hidden h-vh85 md:h-vh115  bg-gradient-to-b from-black to-white'
      id='page1'
    >
      <div className='fixed top-0 left-0 w-full mt-11'>
        <h1 className='text-center uppercase py-5 font-mono'>
          <span className='text-6xl md:text-9xl'>Jon</span>
          <span className='text-md inline-block text-1xl md:text-4xl transform rotate-90 relative top-[-12px] md:top-[-25px]'>
            The
          </span>
          <span className='text-6xl md:text-9xl'>Dev</span>
        </h1>
      </div>
      <Image
        src={model}
        alt='3D Render of Michaelangelos David'
        className='absolute bottom-0 transform translate-y-10 top-20 md:top-64 w-full md:w-7/12'
      />
    </section>
  )
}

export default Hero
