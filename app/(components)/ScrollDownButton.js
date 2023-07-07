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

  const findClosestPage = () => {
    const sections = document.querySelectorAll('section')
    const componentPosition = window.pageYOffset
    let closestPage
    let shortestDistance = Number.MAX_VALUE

    sections.forEach((section) => {
      const sectionPosition = section.offsetTop
      const distance = Math.abs(sectionPosition - componentPosition)
      if (distance < shortestDistance) {
        shortestDistance = distance
        closestPage = section.id
      }
    })

    if (closestPage) {
      setTargetPage(`page${parseInt(closestPage.slice(4)) + 1}`)
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
        offset={50}
        duration={500}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className='text-black text-4xl mt-1'
        />
      </ScrollLink>
    </div>
  )
}

export default ScrollDownButton
/*



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
