import Image from 'next/image'
import Link from 'next/link'
import model from '../../public/michael-angelo-david-crop.png'
import markdown from '../../public/markdown.png'
import next from '../../public/next.png'
import reddie from '../../public/reddie.png'
import resume from '../../public/resume.png'
import steppingstones from '../../public/steppingstones.png'
import data from '../(data)/projects.json'

const PortfolioCard = () => {
  return (
    <div className='w-11/12 pt-1 md:w-5/6 mx-auto'>
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target='_blank'
          className='mt-4 mx-auto block md:w-96'
        >
          <div className='relative inline-block rounded-lg w-full'>
            <img src={item.photo} alt={item.title} className='rounded-lg' />

            <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg'>
              <h2 className='text-lg font-semibold pb-2'>{item.title}</h2>
              <p className='text-md'>{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PortfolioCard
/*

<Image
src={item.photo}
alt={item.title}
layout='fill'
objectFit='cover'
objectPosition='center'
className='rounded-lg w-full'
/>

<img src='your-image.jpg' alt='Image' class='rounded-lg' />
    <Link
      href='https://reddie.herokuapp.com/'
      target='_blank'
      className='w-11/12'
    >
      <div className=' mx-auto relative inline-block rounded-lg'>
        <Image
          src={reddie}
          alt='3D Render of Michaelangelos David'
          className=' rounded-lg'
        />
        <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg'>
          <h2 className='text-lg font-semibold pb-2'>Reddie</h2>
          <p className='text-md'>Custom UI for Saving Reddit Comments</p>
        </div>
      </div>
    </Link>
    */
