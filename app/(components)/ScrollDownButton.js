'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import * as Scroll from 'react-scroll'
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const ScrollDownButton = () => {
  const [targetPage, setTargetPage] = useState('page2')
  const [scrollToTop, setScrollToTop] = useState(false)
  const [offset, setOffset] = useState(50)

  const findClosestPage = () => {
    const sections = document.querySelectorAll('section')
    const footer = document.querySelectorAll('footer')
    const allSections = [...sections, ...footer]
    const componentPosition = window.pageYOffset
    let closestPage
    let shortestDistance = Number.MAX_VALUE

    allSections.forEach((section) => {
      const sectionPosition = section.offsetTop
      const distance = Math.abs(sectionPosition - componentPosition)

      if (distance < shortestDistance) {
        shortestDistance = distance
        closestPage = section.id
      }

      if (distance < 10) {
        setTargetPage('page1')
      }
    })

    if (closestPage) {
      if (`page${parseInt(closestPage.slice(4)) + 1}` === 'page6') {
        setTargetPage('page1')
        setOffset(-50)
        setScrollToTop(true)
      } else {
        setTargetPage(`page${parseInt(closestPage.slice(4)) + 1}`)
        setScrollToTop(false)
        setOffset(50)
      }
    }
  }

  useEffect(() => {
    findClosestPage()
    window.addEventListener('scroll', findClosestPage)
    return () => {
      window.removeEventListener('scroll', findClosestPage)
    }
  }, [])

  return (
    <div className='flex justify-end self-end mt-5 fixed bottom-0 right-0 z-20'>
      <ScrollLink
        className='relative flex items-center justify-center w-12 h-12 rounded-full bg-white transition-transform hover:translate-y-2  mb-3 mr-3 '
        to={targetPage}
        spy={true}
        smooth={true}
        delay={0}
        offset={offset}
        duration={500}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className={` transition-all duration-300 ease-in-out text-black text-4xl ${
            scrollToTop ? 'mb-1 rotate-180' : 'mt-1'
          }`}
        />
      </ScrollLink>
    </div>
  )
}

export default ScrollDownButton
/*

<div className={`text-center ${isTrue ? 'bg-green-500 text-white' : 'bg-red-500 text-black'}`}>
  Content
</div>


const sections = document.querySelectorAll('section')

const logSections = () => {
  console.log(sections)
}
const findClosestElement = (x, y) => {
  const closestElement = document.elementFromPoint(x, y)
  console.log('Closest Element:', closestElement)
}

let toSection = 'page2'
const handleClick = (event) => {
  const { clientX, clientY } = event
  const divElement = event.currentTarget.parentElement
  const sectionElements = Array.from(divElement.parentElement.children).filter(
    (child) => child.tagName === 'SECTION'
  )

  let closestSection
  let shortestDistance = Number.MAX_VALUE

  sectionElements.forEach((section) => {
    const { top, bottom } = section.getBoundingClientRect()
    const sectionCenter = (top + bottom) / 2
    const distance = Math.abs(sectionCenter - clientY)

    if (distance < shortestDistance) {
      shortestDistance = distance
      closestSection = section.id
    }
  })

  console.log('Closest Section:', closestSection)
  toSection = closestSection

  const lastCharacter = toSection.charAt(toSection.length - 1)
  console.log('Last Character:', lastCharacter)

  console.log(toSection)
}
*/
