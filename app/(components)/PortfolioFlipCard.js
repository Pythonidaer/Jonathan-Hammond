import styles from './SectionThree.module.css'
import data from '../(data)/projects.json'

const PortfolioFlipCard = () => {
  return (
    <div className='mx-auto flex justify-around flex-wrap'>
      {data.map((item, index) => (
        <div key={index} className={`${styles.card} `}>
          <div className={`${styles.card__content} rounded-lg`}>
            <div className={styles.card__front + ' ' + styles['bg-blue-300']}>
              <h3
                className={
                  styles.card__title +
                  ' ' +
                  styles['text-4xl'] +
                  ' ' +
                  styles['-translate-z-10']
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  styles.card__subtitle +
                  ' ' +
                  styles.uppercase +
                  ' ' +
                  styles['text-xs'] +
                  ' ' +
                  styles['font-bold'] +
                  ' ' +
                  styles.opacity70 +
                  ' ' +
                  styles['-translate-z-20']
                }
              >
                {item.subtitle}
              </p>
            </div>

            <div className={styles.card__back + ' ' + styles['bg-gray-800']}>
              <p className={styles.card__body + ' ' + styles['rotate-y-180']}>
                {item.details}
              </p>
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
