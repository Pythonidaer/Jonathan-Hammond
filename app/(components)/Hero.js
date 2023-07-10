import Image from 'next/image'
import model from '../../public/michael-angelo-david-crop.png'
import ScrollDownButton from './ScrollDownButton'

/* Hero Image should be redesigned, because it doesn't touch bottom of section container*/
const Hero = () => {
  return (
    <section
      className='flex justify-center items-center relative overflow-hidden h-screen bg-gradient-to-b from-white to-black max-h-[600px] md:max-h-full h-svhcalc'
      id='page1'
    >
      <div className='fixed top-0 left-0 w-full mt-11'>
        <h1 className='text-center uppercase py-5 font-mono'>
          <span className='text-6xl md:text-9xl text-black'>Jon</span>
          <span className='text-md inline-block text-1xl md:text-4xl transform rotate-90 relative top-[-12px] md:top-[-25px] text-black'>
            The
          </span>
          <span className='text-6xl md:text-9xl text-black'>Dev</span>
        </h1>
      </div>
      <Image
        src={model}
        alt='3D Render of Michaelangelos David'
        className='absolute bottom-0 transform translate-y-10 top-20 md:top-[15rem] lg:top-[8rem] w-full md:w-7/12'
      />
    </section>
  )
}

export default Hero
