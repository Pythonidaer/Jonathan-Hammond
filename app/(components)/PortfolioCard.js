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
    <div className='w-11/12 pt-1 md:w-5/6 mx-auto flex flex-wrap justify-start'>
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target='_blank'
          className='sm:mx-auto md:mx-0 mb-6 md:w-1/2 lg:w-1/3 xl:w-1/3 relative'
        >
          <div className='relative inline-block rounded-lg overflow-hidden group'>
            <img
              src={item.photo}
              alt={item.title}
              className='rounded-lg filter brightness-100 group-hover:brightness-50 transition duration-300 group-hover:scale-105 transition-transform '
            />

            <div className='absolute bottom-0 left-0 right-0 max-w-full w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg'>
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

    <div className='w-11/12 pt-1 md:w-5/6 mx-auto flex flex-wrap justify-start'>
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target='_blank'
          className='sm:sm:mx-auto md:mx-0 mb-6 md:w-1/2 lg:w-1/3 xl:w-1/3'
        >
          <div className='relative inline-block rounded-lg '>
            <img src={item.photo} alt={item.title} className='rounded-lg' />

            <div className='absolute bottom-0 left-0 right-0 max-w-full w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg'>
              <h2 className='text-lg font-semibold pb-2'>{item.title}</h2>
              <p className='text-md'>{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>

          <Link
          key={index}
          href={item.url}
          target='_blank'
          className='sm:mx-auto md:mx-0 mb-6 md:w-1/2 lg:w-1/3 xl:w-1/3'
        >
          <div className='relative inline-block rounded-lg overflow-hidden group'>
            <img
              src={item.photo}
              alt={item.title}
              className='rounded-lg transform group-hover:scale-105 transition-transform duration-500'
            />

            <div className='absolute bottom-0 left-0 right-0 max-w-full w-full bg-black bg-opacity-70 p-4 text-white rounded-b-lg '>
              <h2 className='text-lg font-semibold pb-2'>{item.title}</h2>
              <p className='text-md'>{item.description}</p>
            </div>
          </div>
        </Link>
    */
