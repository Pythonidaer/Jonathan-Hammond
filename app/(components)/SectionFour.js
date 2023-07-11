'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import BiLinkedin from './BiLinkedin'
import BiEnvelopeAtFill from './BiEnvelopeAtFill'
import BiGithub from './BiGithub'
import BiTelephoneForwardFill from './BiTelephoneForwardFill'
import styles from './SectionFour.module.css'

const SectionFour = () => {
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show)
        } else {
          entry.target.classList.remove(styles.show)
        }
      })
    })

    const hiddenElements = document.querySelectorAll(`.${styles.hiddenIcon}`)
    hiddenElements.forEach((el) => observer.current.observe(el))

    return () => {
      // Clean up the observer when the component unmounts
      observer.current.disconnect()
    }
  }, [])

  return (
    <section
      id='page4'
      className={`min-h-screen sm:min-h-px500  relative z-0 ${styles.page4}`}
    >
      <h2 className='text-center text-white text-6xl md:text-9xl md:text-center uppercase py-6 md:py-10 mb-0 font-mono'>
        Contact
      </h2>
      <div className='flex flex-wrap w-4/5 mx-auto'>
        <div
          className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 ${styles.hiddenIcon}`}
        >
          <Link
            href='https://www.linkedin.com/in/jonamichahammo'
            target='_blank'
          >
            <BiLinkedin className='mx-auto text-7xl md:text-7xl pb-4' />
          </Link>
        </div>

        <div
          className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 ${styles.hiddenIcon}`}
        >
          <Link href='https://www.github.com/pythonidaer' target='_blank'>
            <BiGithub className='mx-auto text-7xl md:text-7xl pb-4' />
          </Link>
        </div>
        <div
          className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 ${styles.hiddenIcon}`}
        >
          <Link href='mailto:codefolio.work@gmail.com' target='_blank'>
            <BiEnvelopeAtFill className='mx-auto text-7xl md:text-7xl pb-4' />
          </Link>
        </div>
        <div
          className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 ${styles.hiddenIcon}`}
        >
          <Link href='tel:+19788543243' target='_blank' title='1+ 978 854 3243'>
            <BiTelephoneForwardFill className='mx-auto text-7xl md:text-7xl pb-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionFour

/*
min-h-full 

    <section
      id='page3'
      className='min-h-full bg-gradient-to-b from-black to-gray-500 relative z-0'
    >
    */

/*
min-h-full 

    <section
      id='page3'
      className='min-h-full bg-gradient-to-b from-black to-gray-500 relative z-0'
    >
    */
