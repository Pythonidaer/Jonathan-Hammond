import styles from './SectionThree.module.css'
import data from '../(data)/projects.json'
import Link from 'next/link'
import BiArrowRightCircle from './BiArrowRightCircle'

const PortfolioFlipCard = () => {
  return (
    <div className='mx-auto flex justify-around flex-wrap'>
      {data.map((item, index) => (
        <div key={index} className={`${styles.card} mb-5 md:mb-8`}>
          <div className={`${styles.card__content} rounded-lg`}>
            <Link
              href={item.url}
              className={styles.card__front}
              target='_blank'
            >
              <div>
                <h3 className={`text-3xl mb-6 md:mt-[30%]`}>{item.title}</h3>
                <p className={`text-xl mb-6`}>{item.subtitle}</p>
                <span className='visible md:invisible bg-white  text-blue-700 font-bold py-2 px-4 rounded min-w-[120px] mx-auto z-10'>
                  Visit App
                </span>
              </div>
            </Link>

            <div className={`${styles.card__back} `}>
              <Link
                href={item.url}
                target='_blank'
                className={`  absolute top-0 bottom-0 left-0 right-0 grid place-items-center items-center px-[2em] py-[5em] `}
              >
                <p className={styles.card__body + ' ' + styles['rotate-y-180']}>
                  {item.details}
                </p>
                <BiArrowRightCircle
                  alt='Visit App'
                  className={`${styles.card__back_link} mx-auto mt-5 text-6xl pb-4 hover:translate-y-4 transition-all duration-1000 ease-in-out `}
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioFlipCard
/*

project.json I decided not to use... for now:
,
  {
    "photo": "/markdown.png",
    "url": "https://markdown-links-generator.vercel.app/",
    "title": "Markdown Generator",
    "subtitle": "Easy-Paste README.md Links Builder",
    "details": "details"
  }

    <div className='w-11/12 pt-1 md:w-5/6 mx-auto flex flex-wrap  md:justify-center lg:justify-start'>
      {data.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          target='_blank'
          className='text-center mb-6  lg:w-1/3 xl:w-1/3 relative'
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
    */
