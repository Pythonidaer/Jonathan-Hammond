import Image from 'next/image'
import model from '../../public/michael-angelo-david-crop.png'
import ScrollDownButton from './ScrollDownButton'

/* Hero Image should be redesigned, because it doesn't touch bottom of section container */
const Hero = () => {
  return (
    <section
      className='flex justify-center items-center relative overflow-hidden h-vh85 md:h-vh115'
      id='page1'
    >
      <Image
        src={model}
        alt='3D Render of Michaelangelos David'
        className='absolute bottom-0 transform translate-y-10 top-20 md:top-64 w-full md:w-7/12'
      />
    </section>
  )
}

export default Hero
