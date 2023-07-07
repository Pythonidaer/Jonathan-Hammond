import Image from 'next/image'
import model from '../../public/michael-angelo-david.jpg'

const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
      <Image
        src={model}
        alt='3D Render of Michaelangelos David'
        width={500}
        height={300}
      />
    </div>
  )
}

export default Hero
